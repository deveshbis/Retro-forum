const loadNews = async(searchText) => {
    const response = await fetch(` https://openapi.programming-hero.com/api/retro-forum/posts?category=${searchText}`);
    const data = await response.json()
    const postN = data.posts;
    displayPost(postN);
    
}

const displayPost = postN =>{

    const postContainer = document.getElementById("news-container");

    postContainer.textContent = " ";

    postN.forEach(post => {
        console.log(post);
        const postCard = document.createElement("div");
        postCard.classList.add("news");
        postCard.innerHTML =  `<div class="flex news" >
                <div class="indicator">
                    <span class="indicator-item badge"></span>
                    <div class="grid w-32 h-32 bg-base-300 place-items-center"><img src="${post.image}" alt=""></div>
                </div>
        
                <div class=" p-3">
                    <div class="grid grid-cols-2">
                        <div class="w-full flex-none text-sm font-medium text-slate-700 mt-2 mb-4">
                            <span># </span>${post.category}
                        </div>
                        <div class="w-full flex-none text-sm font-medium text-slate-700 mt-2 mb-4">
                            <span>Author :</span> ${post.author.name}
                        </div>
                    </div>
                    <div class="">
                        <h1 class="flex-auto text-lg font-bold text-slate-900 mb-5">
                            ${post.title}
                        </h1>
                        <div class="w-full flex-none text-sm font-medium text-slate-700 mt-2 mb-5">
                            ${post.description}
                        </div>
                    </div>
        
                    <hr class="border-dotted mb-5">
        
                    <div class="flex justify-between  mb-6 text-sm font-medium ">
                        <div class="flex justify-between space-x-5 items-center">
                            <div class="flex items-center gap-1">
                                <i class="fa-regular fa-message"></i>
                                <p>${post.comment_count}</p>
                            </div>
        
                            <div class="flex items-center gap-1">
                                <i class="fa-regular fa-eye"></i>
                                <p>${post.view_count}</p>
                            </div>
        
                            <div class="flex items-center gap-1">
                                <i class="fa-regular fa-clock"></i>
                                <p>${post.posted_time}<span> min</span></p>
                            </div>
                        </div>
                        <button
                            class="flex-none flex items-center justify-center w-9 h-9 rounded-full border border-slate-200 bg-green-300"
                            type="button" aria-label="Like">
                            <i class="fa-regular fa-message"></i>
                        </button>
                    </div>
                </div>
            </div>`;
            postContainer.appendChild(postCard);

    });

    //hide loading spinner
    toggleSpinner(false)
}

const handleSearch = () =>{
    toggleSpinner(true);
    const searchField = document.getElementById("news-search");
    const searchText = searchField.value;
    loadNews(searchText);
}



const toggleSpinner =(isLoading) => {
    const loadingSpinner = document.getElementById("loading-spinner");
    if(isLoading){
    loadingSpinner.classList.remove("hidden");

    }
    else{
        loadingSpinner.classList.add("hidden");
    }
}


const letestNews = async() => {
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts');
    const letdata = await res.json()
    const letestContainer = document.getElementById("letest-container");

    letdata.forEach((fullcard) => {
        // console.log(fullcard);

        const div2 = document.createElement("div");
        div2.classList.add("card");

        div2.innerHTML = `<div class=" card">
        <div
            class="border-r border-b border-l border-gray-400 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
            <img src="${fullcard.cover_image}" class="w-full mb-3">
            <div class="p-4 pt-2">
                <div class="mb-8">
                    <p class="text-sm text-gray-600 flex items-center gap-2 mb-2"><i
                            class="fa-regular fa-calendar"></i> ${fullcard.author.posted_date}</p>
                    <a href="#" class="text-gray-900 font-bold text-lg mb-2 inline-block">${fullcard.title}</a>
                    <p class="text-gray-700 text-sm">${fullcard.description}</p>
                </div>
                <div class="flex items-center">
                    <a href="#"><img class="w-10 h-10 rounded-full mr-4" src="${fullcard.profile_image}" alt="image Loading"></a>
                    <div class="text-sm">
                        <a href="#"
                            class="text-gray-900 font-semibold leading-none hover:text-indigo-600">${fullcard.author.name}</a>
                        <p class="text-gray-600">${fullcard.author.designation}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
        `;

        letestContainer.appendChild(div2);
    });
}



letestNews();

