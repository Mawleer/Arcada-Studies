
let userName = localStorage.getItem("user-name");

if (!userName){
    userName = prompt("vad heter du?");
    localStorage.setItem("user-name", userName);
}
document.getElementById("name").textContent = userName;

const visitCount = localStorage.getItem("visitCount") || 1;  //default 1
localStorage.setItem("visitCount", Number(visitCount+1));
document.getElementById("visit").textContent = `Detta är besök #${visitCount}`;



document.getElementById("logout").addEventListener('click', () => {
    localStorage.removeItem("user-name");
    localStorage.removeItem("visitCount")
    location.reload();
}) 
    



// https://icanhazdadjoke.com/

async function getJoke() {

    const jokeResponse = await fetch("https://icanhazdadjoke.com/",{
        headers: {"Accept": "text/plain"}
    })
    const JokeText = await jokeResponse.text();
    document.getElementById("Joke-response").innerText = JokeText;
    console.log(JokeText)
}

document.getElementById("joke").addEventListener('click', () => {
    getJoke()
})