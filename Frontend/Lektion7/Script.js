//const d = new Date();
//console.log(`${d.getDate()}.${d.getMonth()}.${d.getFullYear()}`);


setInterval(()=>{
const d = new Date();
document.getElementById("time").textContent =
`${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;

},1000);



document.getElementById("ok").addEventListener('click', (evt)=> {
    console.log(evt)
})

for (const inp of document.querySelectorAll(".inp")){
    inp.addEventListener('input', () => (
      

        document.getElementById("form-output").textContent = inp.value

    ))
}