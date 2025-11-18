

// document.getElementById("div1").style.backgroundColor = "red"

/*
document.getElementById("div1").addEventListener('click', ()=>{
    document.getElementById("div1").style.backgroundColor = "#141541"
})
*/

// document.querySelectorAll(".divs").forEach(elem=>{console.log(elem)});

/*
for (const elem of document.querySelectorAll('.divs')){
    console.log(elem.id)
    const color = elem.id.split ("-")[1];
    console.log(color)
    elem.style.backgroundColor = color
}

*/

// Metod 1 loopa egenom och lägg till eventListener till alla elemnt

document.querySelectorAll('#container2 > .divs').forEach(elem => {
    const color = elem.getAttribute("data-color");
    //elem.style.backgroundColor = color

    elem.addEventListener('click', ()=>{elem.style.backgroundColor = color})
})

// Metod 2 sätt lyssnaren på container-element

document.getElementById("container").addEventListener('click', evt => {
    
    const elem = evt.target;
    if (!elem.classList.contains("divs")) return; // guard statement
    console.log(evt.target); // evt.target = det vi clickat på
    const color = elem.id.split("-")[1];
    elem.style.backgroundColor = color;
})

function resetColors() {
    for (const elem of document.querySelectorAll('.divs')){
        elem.style.backgroundColor = "steelblue"
    }
}