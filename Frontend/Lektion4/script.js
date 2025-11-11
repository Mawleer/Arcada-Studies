document.getElementById("myList").innerHTML =`<li>item1</li>`;

document.getElementById("myList").innerHTML += `<li>item2</li>`;

const colors = ["red", "green","blue"];

console.log(colors[0])
console.log(colors)

const things = ["1", "Hello", colors]
console.log(things[2][0])

colors[2] = "yellow"
console.log(colors)


const person = {
    name: "Linus",
    age: "35",
    likes: "C programming"
};

conslole.log(`${person.name} gillar ${person.likes}`)

const persons = [
    {name: "Linus", age: "35", likes: "C programming"}
    {name: "Dennis", age: "50", likes: "robotar"}
    {name: "Axel", age: "30", likes: "Spel"}
]

for(let i = 0; i < persons.length ; i++) {
    const personStr =`
    <li>
        ${i} - `
}