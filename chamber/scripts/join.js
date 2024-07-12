const d = new Date()
let year = d.getFullYear()
let lastModif = new Date(document.lastModified);
let currentYear = document.getElementById("currentyear")
currentYear.textContent = year
let last = document.getElementById("lastModified")
last.textContent = lastModif

const products = [
    {
      id: 'fc-1888',
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: 'fc-2050',
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: 'fs-1987',
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: 'ac-2000',
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: 'jj-1969',
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];
  let dropdown = document.getElementById('product-select')

function dropdownList() {
    
    for (let i=0; i < products.length; i++) {
        const dropdownItem = document.createElement('option')
        let object = products[i]
        dropdownItem.textContent = object.name
        dropdownItem.id = object.id
        dropdown.appendChild(dropdownItem)
        

    }
}

dropdownList()

let form = document.getElementById('form')
const formCount = () => {
    
    let count = localStorage.getItem('formCount')
    count = Number(localStorage.getItem('formCount')) + 1
    localStorage.setItem('formCount', count)
    

}

submitButton = document.getElementById('submit-button')


formCountDisplay = document.getElementById('form-count-display')

function display() {
    let displayAmount =(localStorage.getItem("formCount"))
    formCountDisplay.textContent = displayAmount
}



var field = document.querySelector('#form-date');
var date = Date.now();
// Set the date
field.value = date;