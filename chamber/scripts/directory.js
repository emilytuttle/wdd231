// FOR NAV BAR

const hamburgerElement = document.querySelector("#myButton");
const navElement = document.querySelector('.menuLinks');

hamburgerElement.addEventListener('click', () => {
    navElement.classList.toggle('open');
    hamburgerElement.classList.toggle('open');
});

// Footer

const d = new Date()

let year = d.getFullYear()
let lastModif = new Date(document.lastModified);


let currentYear = document.getElementById("currentyear")
currentYear.textContent = year

let last = document.getElementById("lastModified")
last.textContent = lastModif

// Business boxes
const memberContainer = document.getElementById("chamber-members")
const url = "./data/members.json"

const gridButton = document.getElementById("grid-button")
const listButton = document.getElementById("list-button")

async function getChamberDataGrid() {
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    displayBusinessesCard(data.members)
}

async function getChamberDataList() {
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    displayBusinessList(data.members)
}

gridButton.addEventListener('click', function() {
    memberContainer.innerHTML = ''
    getChamberDataGrid()
})

listButton.addEventListener('click', function() {
    memberContainer.innerHTML = ''
    getChamberDataList()
})

getChamberDataGrid()

const displayBusinessesCard = (members) => {
    members.forEach((member) => {
        const card = document.createElement('div')
        card.classList.add('card')
        card.innerHTML = `
        <div id="business-name">${member.name}</div>
        <hr>
        <div id="bus-info-and-pic">
            <img src="${member.image}" alt="${member.name} Logo" width="80" loading="lazy">
            <div id="bus-info">
            <p><span class="bold">Phone: </span>${member.phone_number}</p>
            <p><span class="bold">Address: </span>${member.address}</p>
            <p><span class="bold">URL: </span><a href="${member.website_url}">${member.website_url}</a></p>
            </div>
        </div>
        `
        memberContainer.appendChild(card)
    })
}

const displayBusinessList = (members) => {
    const list = document.createElement('table')
    list.innerHTML=`
        <tr>
            <th>Company</th>
            <th>Phone</th>
            <th>Address</th>
            <th>URL</th>
        </tr>
        `
    members.forEach((member) => {
        const listItem = document.createElement('tr')
        listItem.innerHTML=`
            <td>${member.name}</td>
            <td>${member.phone_number}</td>
            <td>${member.address}</td>
            <td><a href="${member.website_url}">${member.website_url}</a></td>
        `
        list.appendChild(listItem)
    })

    memberContainer.appendChild(list)
}



