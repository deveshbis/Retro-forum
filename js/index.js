
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
        const postCard = document.createElement("div");
        postCard.classList.add("news");
        postCard.innerHTML =  `<div class="flex mt-5 shadow-lg" >
                <div class="indicator">
                    <span class="indicator-item badge ${post.isActive?  "bg-green-400":"bg-red-500"}"></span>
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
                        <h1 id="title-set" class="flex-auto text-lg font-bold text-slate-900 mb-5">
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
                        <button onclick="myButtonClick()" class="bg-green-500 rounded-lg p-2 text-white"><i class="fa-regular fa-message"></i></button>
                        
                    </div>
                </div>
            </div>`;
            postContainer.appendChild(postCard);

    });

    //hide loading spinner
    toggleSpinner(false)
}


//mark as read 
let clickCount = 0;
function myButtonClick(title, viewCount){
    clickCount++;
    document.getElementById("clickCountDisplay").innerText = clickCount;

    //card add to box
    const titleContainer = document.getElementById("title-container");
    const div = document.createElement('div');
    div.textContent = `${title} - View Count: ${viewCount}`;
    titleContainer.appendChild(div);

}






const handleSearch = () =>{
    toggleSpinner(true);
    const searchField = document.getElementById("news-search");
    const searchText = searchField.value;
    loadNews(searchText);
 
}


// loading Spinner
const toggleSpinner =(isLoading) => {
    const loadingSpinner = document.getElementById("loading-spinner");
    if(isLoading){
    loadingSpinner.classList.remove("hidden");
    setTimeout(() => {
        loadingSpinner.classList.add("hidden");
      }, 2000);
    }
    else{
        loadingSpinner.classList.add("hidden");
    }
    
}

// loadNews();




const loadPost = async () => {
    const response = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
    const data = await response.json();

    const loadContainer = document.getElementById("news-container");
    data.posts.forEach((element) => {
        const divCard = document.createElement("div");
        divCard.classList.add("news");

        divCard.innerHTML = `<div class="flex mt-5 shadow-lg">
        <div class="indicator">
        <span class="indicator-item badge ${element.isActive ? " bg-green-400" : "bg-red-500"}"></span>
        <div class="grid w-32 h-32 bg-base-300 place-items-center"><img src="${element.image}" alt=""></div>
    </div>
    <div class=" p-3">
        <div class="grid grid-cols-2">
            <div class="w-full flex-none text-sm font-medium text-slate-700 mt-2 mb-4">
                <span># </span>${element.category}
            </div>
            <div class="w-full flex-none text-sm font-medium text-slate-700 mt-2 mb-4">
                <span>Author :</span> ${element.author.name}
            </div>
        </div>
        <div class="">
            <h1 class="flex-auto text-lg font-bold text-slate-900 mb-5">
                ${element.title}
            </h1>
            <div class="w-full flex-none text-sm font-medium text-slate-700 mt-2 mb-5">
                ${element.description}
            </div>
        </div>
        <hr class="border-dotted mb-5">
        <div class="flex justify-between  mb-6 text-sm font-medium ">
            <div class="flex justify-between space-x-5 items-center">
                <div class="flex items-center gap-1">
                    <i class="fa-regular fa-message"></i>
                    <p>${element.comment_count}</p>
                </div>
                <div class="flex items-center gap-1">
                    <i class="fa-regular fa-eye"></i>
                    <p>${element.view_count}</p>
                </div>
                <div class="flex items-center gap-1">
                    <i class="fa-regular fa-clock"></i>
                    <p>${element.posted_time}<span> min</span></p>
                </div>
            </div>
            <button onclick="myButtonClick()" class="bg-green-500 rounded-lg p-2 text-white"><i class="fa-regular fa-message"></i></button>
        </div>
    </div>
    </div>                    
        `;
        loadContainer.appendChild(divCard);
    });

   
}

loadPost();

























//Letest Post
const letestNews = async() => {
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts');
    const letdata = await res.json()
    const letestContainer = document.getElementById("letest-container");

    letdata.forEach((fullcard) => {

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




//Card Count