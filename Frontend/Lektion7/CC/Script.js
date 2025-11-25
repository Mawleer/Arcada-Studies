// välj ett sätt för projekt här två för att visa

const IMAGE_ID =[16, 21]
for (const id of IMAGE_ID){

    document.getElementById("thumb-container").innerHTML += `<img data-id=${id} src="./Img/Meny-vänster-thumb_${id}.jpeg">`;
}



for(const img of document.querySelectorAll("#thumb-container > img")){
   console.log(img)
    img.addEventListener('click', ()=>{
        const id = img.dataset.id;
    document.getElementById("#lightbox").innerHTML =`<img src=${img.src}>`;
   })
}

function closeLightbox() {
document.getElementById("lightbox").classList.add("hidden");
}

document.querySelector("#lightbox img").addEventListener('click', closeLightbox);
window.addEventListener('keydown', (evt) => {
    if (!document.getElementById("lightbox").classList.contains("hidden") && evt.key ==="Escape");
})
