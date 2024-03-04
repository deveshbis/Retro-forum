
const addToCard = document.getElementById("msg-btn");

for(let i = 0; i < addToCard; i++ ){
    const card = addToCard[i];

    card.addEventListener('click',function(){

        const title = card.querySelector("h3").innerText;

        console.log(title);
    })
}
