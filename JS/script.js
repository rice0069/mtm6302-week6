console.log("Js File Added")

const bodyTag = document.querySelector("body")

bodyTag.innerHTML += `
    <section id="groceries"> 
        <h2>Groceries</h2>
        <ul id="groceryList"></ul>
    </section>
`

let groceries = ["apple", "dog food", "bread", "bananas", "milk", "eggs"]
const groceryUl = document.getElementById("groceryList")

// for what coming from where
for (groceryItem of groceries) {
    groceryUl.insertAdjacentHTML("beforeend", `<li>${groceryItem}</li>`)
}

function addItem(item) {
    if (item !== "") {
        let newItem = `<li>${item}</li>`
        groceryUl.insertAdjacentHTML("afterbegin", newItem)
    }
}

const section = document.createElement("section")
section.id = "todo"
section.innerHTML = "<h2>Todo List</h2>"

bodyTag.appendChild(section)