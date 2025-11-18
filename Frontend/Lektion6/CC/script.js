
let score = 0



const myTimer = setInterval(() => {
   resetColors()

    random()
},1000);


function random(){
    const divs = document.querySelectorAll(".light");
    const index = Math.floor(Math.random()*3);
    const rdiv = divs[index]
    const color = rdiv.getAttribute("data-color");
    rdiv.style.backgroundColor = color
    
}

function resetColors() {
    for (const elem of document.querySelectorAll('.light')){
        elem.style.backgroundColor = "black"
    }
}