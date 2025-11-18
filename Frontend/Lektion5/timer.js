
let counter = 0;
let myTimer = null;


//myTimer = setInterval (function(){
//console.log(counter);
//counter++;
//},1000);

myTimer = setInterval(()=> {
    console.log(counter);
counter++;
},1000);

document.getElementById("stop").addEventListener("click",()=> {
    clearInterval(myTimer);
})