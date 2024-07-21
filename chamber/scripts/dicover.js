// FOR NAV BAR

const hamburgerElement = document.querySelector("#button-menu");
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


// last visited storage and message
messageContainer = document.getElementById('welcome-message')

function doLocalStorage() {

    if(localStorage.getItem("lastVisited")==null){
        // consider first visit
        localStorage.setItem("lastVisited", new Date()) 
        messageContainer.textContent = "Welcome! Let us know if you have any questions"
    }
    else{
        localStorage.setItem("lastVisited", new Date()) 
        messageContainer.textContent = "Welcome back to our site!"
        const storageDate = localStorage.getItem("lastVisited")

        let differenceInTime = new Date(d).getTime() - new Date(storageDate).getTime();

        let differenceInDays = Math.round (differenceInTime / (1000 * 3600 * 24));
        console.log(differenceInDays)

        if (Math.abs(differenceInDays) <= 1) {
            messageContainer.textContent = "Back so soon! Awesome!"
        }
        else if (Math.abs(differenceInDays) > 1)
            {
                messageContainer.textContent = "You last visited " + Math.abs(differenceInDays) + " days ago!"
            }
        
        // console.log
        // ("Total number of days between dates:\n" +
        //     new Date(d).toDateString() + " and " +
        //     new Date(storageDate).toDateString() +
        //     " is: " + differenceInDays + " days");
        
        
    }
}

doLocalStorage()

