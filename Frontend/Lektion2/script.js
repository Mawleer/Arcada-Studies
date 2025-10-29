function calc(){
    const namn = document.getElementById("namn").value;
    const r= document.getElementById("radie").value;
    

    document.getElementById('name-output').innerHTML = `Hej ${namn}!`;
    document.getElementById('ans').innerHTML = `Laddnings nivå = ${20*r}%`
}