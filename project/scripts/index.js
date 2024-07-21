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

// form dropdown

const answers = [
    {
      id: 'internet-search',
      name: "Internet Search"
    },
    {
      id: 'friend',
      name: "Friend"
    },
    {
      id: 'family',
      name: "Family"
    },
    {
      id: 'climbing-gym',
      name: "Climbing Gym Staff"
    },
    {
      id: 'other-climber',
      name: "Other Climber"
    }
  ];
  let dropdown = document.getElementById('how-select')

function dropdownList() {
    
    for (let i=0; i < answers.length; i++) {
        const dropdownItem = document.createElement('option')
        let object = answers[i]
        dropdownItem.textContent = object.name
        dropdownItem.id = object.id
        dropdown.appendChild(dropdownItem)
    }
}

dropdownList()


//weather

weatherAPI = "53778186298c1e2280bfff587895ed1d"


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
forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=40.7608&lon=-111.8910&appid=53778186298c1e2280bfff587895ed1d&units=imperial'
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

messageContainer = document.getElementById('welcome-message')

function doLocalStorage() {

    if(localStorage.getItem("lastVisited")==null){
        localStorage.setItem("lastVisited", new Date()) 
        messageContainer.textContent = "Welcome to our site!"
    }
    else{
        localStorage.getItem("lastVisited")
        localStorage.setItem("lastVisited", new Date()) 
        messageContainer.textContent = "Welcome back to our site!"
    }
}

doLocalStorage()
