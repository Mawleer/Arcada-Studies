const user = "Axel"
const pi = "PI"
const value = Math.PI
let count = 0;

console.log("the file Works")


function clickCounter(){
    count++;
    console.log(`Du har clickat ${count} gånger`)
}

function hello(){
    let names = prompt("What is your name?");
    alert(`Hello ${names}!`)
}

function handleName(){
    const namn = document.getElementById("namn").value;
//console.log(`Hey ${namn}`);
document.getElementById(`name-output`).innerHTML = `Hej ${names}`;
}
