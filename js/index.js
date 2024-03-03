// const fatchDataCategory = (category) =>{
//     const url = 'https://openapi.programming-hero.com/api/retro-forum/posts';
//     fetch(url)
//         .then((res) => res.json())
//         .then((data) =>{
//             console.log(data);
//         })

        
// }

//load news

const loadNews = async() => {
    const response = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
    const data = await response.json()
    // console.log(data.posts);
    const newsContainer = document.getElementById("news-container");
    data.posts.forEach((item) => {
        // console.log(item);

        const div = document.createElement("div");
        div.classList.add("news");

    
        div.innerHTML = `<div class="flex news" >
        <div class="indicator">
            <span class="indicator-item badge"></span>
            <div class="grid w-32 h-32 bg-base-300 place-items-center"><img src="${item.image}" alt=""></div>
        </div>

        <div class=" p-3">
            <div class="grid grid-cols-2">
                <div class="w-full flex-none text-sm font-medium text-slate-700 mt-2 mb-4">
                    <span>#</span>${item.category}
                </div>
                <div class="w-full flex-none text-sm font-medium text-slate-700 mt-2 mb-4">
                    <span>Author :</span> ${item.author.name}
                </div>
            </div>
            <div class="">
                <h1 class="flex-auto text-lg font-bold text-slate-900 mb-5">
                    ${item.title}
                </h1>
                <div class="w-full flex-none text-sm font-medium text-slate-700 mt-2 mb-5">
                    ${item.description}
                </div>
            </div>

            <hr class="border-dotted mb-5">

            <div class="flex justify-between  mb-6 text-sm font-medium ">
                <div class="flex justify-between space-x-5 items-center">
                    <div class="flex items-center gap-1">
                        <i class="fa-regular fa-message"></i>
                        <p>${item.comment_count}</p>
                    </div>

                    <div class="flex items-center gap-1">
                        <i class="fa-regular fa-eye"></i>
                        <p>${item.view_count}</p>
                    </div>

                    <div class="flex items-center gap-1">
                        <i class="fa-regular fa-clock"></i>
                        <p>${item.posted_time}<span> min</span></p>
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
    newsContainer.appendChild(div);
    });
}

loadNews();