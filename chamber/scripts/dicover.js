messageContainer = document.getElementById('welcome-message')

function doLocalStorage() {

    if(localStorage.getItem("lastVisited")==null){
        // consider first visit
        localStorage.setItem("lastVisited", new Date()) 
        messageContainer.textContent = "Welcome to our site!"
    }
    else{
        const lastVisited = localStorage.getItem("lastVisited")
        // your logic to calculate days based on format stored.
        localStorage.setItem("lastVisited", new Date()) 
        messageContainer.textContent = "Welcome back to our site!"
    }
}

doLocalStorage()

d
storageDate = localStorage.getItem("lastVisited")
console.log(d)
console.log(storageDate)