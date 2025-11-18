const names = ["Kaffe", "Munk", "Glass"]
const prices =[3,        3.5,       4]
const stock =[100,        15,       45]



console.log(`En ${names[1]} kostar ${prices[1]}, vi har ${stock[1]}`);

prices[1] = 5;

console.log(`En ${names[1]} kostar ${prices[1]}, vi har ${stock[1]}`);

for (let i = 0; i<names.length ; i++){
    const menyStr = 
    `
    <li>
    En ${names[i]} kostar ${prices[i]}, vi har ${stock[i]}
    </li>
    `;

    document.getElementById("meny").innerHTML+= menyStr
}
