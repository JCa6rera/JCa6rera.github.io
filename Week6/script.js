// 1. Button Click Event
document.getElementById("clickButton").addEventListener("click", function() {
    alert("Pressed")
})

// 2. Input Focus Event
document.getElementById("nameInput").addEventListener("focus", function() {
    console.log("Input focused")
})

// 3. Hover Event
let hoverBox = document.getElementById("hoverBox")
hoverBox.addEventListener("mouseover", function(){
    hoverBox.style.backgroundColor = "orange"
})

hoverBox.addEventListener("mouseout", function(){
    hoverBox.style.backgroundColor = "lightblue"
})

// 4. Toggle Menu
document.getElementById("menuButton").addEventListener("click", function (){
    document.getElementById("menu").classList.toggle("hidden")
})

// 5. To-Do List
document.getElementById("addButton").addEventListener("click", function (){
    let input = document.getElementById("todoInput")
    let task = input.value

    if(task !== ""){
        let li = document.createElement("li")
        li.textContent = task

        // Removing task by clicking
        li.addEventListener("click", function() {
            li.remove()
        })

        document.getElementById("todoList").appendChild(li);
        input.value = ""
    }
})

// Greeting Based on Time
let greeting = document.getElementById("greeting")
let hour = new Date().getHours()

if (hour < 12) {
    greeting.textContent = "Good Morning!"
} else if (hour < 18) {
    greeting.textContent = "Good Afternoon!"
} else {
    greeting.textContent = "Good Evening!"
}