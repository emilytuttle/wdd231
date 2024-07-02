weatherAPI = "53778186298c1e2280bfff587895ed1d"

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

var numbers = [0, 1, 2, 3, 4, 5, 6];
var newNums = [];

for (var i = 0; i < 3; i++) {
    var idx = Math.floor(Math.random() * numbers.length);
    newNums.push(numbers[idx]);
    numbers.splice(idx, 1);
}




// Business boxes
const memberContainer = document.getElementById("chamber-members")
const url = "./data/members.json"

const gridButton = document.getElementById("grid-button")
const listButton = document.getElementById("list-button")

async function getChamberDataGrid() {
    const response = await fetch(url)
    const data = await response.json()

    highlightMembers = [data.members[newNums[0]], data.members[newNums[1]], data.members[newNums[2]],]
    displayBusinessesCard(highlightMembers)
}

async function getChamberDataList() {
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    displayBusinessList(data.members)
}


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
            <p><span class="bold">Membership Level: </span>${member.membership_level}</p>
            <p><span class="bold">Phone: </span>${member.phone_number}</p>
            <p><span class="bold">Address: </span>${member.address}</p>
            <p><span class="bold">URL: </span><a href="${member.website_url}">${member.website_url}</a></p>
            </div>
        </div>
        `
        memberContainer.appendChild(card)
    })
}



// WEATHER

const weatherContainer = document.getElementById('current-weather-whole')

const displayResults = (data) => {
       currentTemp.textContent = data.main.temp;
       captionDesc.textContent = data.weather[0].main;
       
}

const displayForecastResults = (data) => {
    today.textContent  = data.list[0].main.temp
    tomorrow.textContent  = data.list[1].main.temp
    twoDay.textContent  = data.list[2].main.temp
}

const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#current-weather-desc');
const today = document.getElementById("todays-temp")
const tomorrow = document.getElementById("tomorrow-temp")
const twoDay = document.getElementById("two-temp")

const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=40.377937&lon=-111.803055&appid=53778186298c1e2280bfff587895ed1d&units=imperial';

async function apiFetch() {
    try {
      const response = await fetch(weatherUrl);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // testing only
        displayResults(data); // uncomment when ready
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch();
forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=40.377937&lon=-111.803055&appid=53778186298c1e2280bfff587895ed1d&units=imperial'
// forecastUrl = 'api.openweathermap.org/data/2.5/forecast?lat=40.377937&lon=-111.803055&appid=53778186298c1e2280bfff587895ed1d&units=imperial'
  async function forecastFetch() {
    try {
      const response = await fetch(forecastUrl);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // testing only
        displayForecastResults(data); // uncomment when ready
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  forecastFetch();