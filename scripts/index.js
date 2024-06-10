const d = new Date()

let year = d.getFullYear()
let lastModif = new Date(document.lastModified);


let currentYear = document.getElementById("currentyear")
currentYear.textContent = year

let last = document.getElementById("lastModified")
last.textContent = lastModif

const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu')
const header = document.querySelector('.header')
const title = document.querySelector('.title')

hambutton.addEventListener('click', function() {
    mainnav.classList.toggle('show')
    mainnav.classList.toggle('shown')
    hambutton.classList.toggle('show')
    header.classList.toggle('shown')
    title.classList.toggle('gone')
})
