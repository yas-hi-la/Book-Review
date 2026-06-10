var addbutton = document.querySelector(".add-book-button")
var form = document.querySelector(".add-book-form")
var screen = document.querySelector(".black-screen")

addbutton.addEventListener("click",function(){
    form.style.display = "block"
    screen.style.display = "block"
})

var Submit = document.getElementById("submit")
var container = document.querySelector(".book-container")
var title = document.getElementById("book")
var author = document.getElementById("book-a")
var tx = document.getElementById("book-r")
Submit.addEventListener("click",function(){
    dv = document.createElement("div")
    dv.innerHTML = `<div class="book-content">
            <h2>${title.value}</h2>
            <h4>${author.value}</h4>
            <p>${tx.value}</p>
            <button onclick="del(event)">Delete</button>
        </div>`
    container.append(dv)
    form.style.display = "none"
    screen.style.display = "none"
    title.value = ""
    author.value = ""
    tx.value = ""
})

var Cancel = document.getElementById("cancel")
Cancel.addEventListener("click",function(){
    form.style.display = "none"
    screen.style.display = "none"
})

function del(event){
    event.target.parentElement.remove()
}