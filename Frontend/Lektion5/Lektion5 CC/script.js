let counter = 0;




function start(){
     counter = document.getElementById("tid").value;
const myTimer = setInterval(()=>{
    console.log(counter)
    document.getElementById("Timer").innerHTML = `Tid kvar: ${counter}`;
    counter--;
   
    if (counter == 0){
    clearInterval(myTimer)
    document.getElementById("Timer").innerHTML = "Tid kvar: 0"
    alert (`Tiden är ute!`)
}
},1000);

}
