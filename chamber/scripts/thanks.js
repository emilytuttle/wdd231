const d = new Date()
let year = d.getFullYear()
let lastModif = new Date(document.lastModified);
let currentYear = document.getElementById("currentyear")
currentYear.textContent = year
let last = document.getElementById("lastModified")
last.textContent = lastModif

                 
function setDate() {
    let date = Date.now().toString();

    document.querySelector('input[name="form-date"]').value = date

}


setDate()



const currentUrl = window.location.href

const everything = currentUrl.split("?")
let formData = everything[1].split("&")
usableData = []

function showData()
{
    formData.forEach((element) => {
        result = element.split("=")
        result = result[1]
        if (result.includes("@40"))
            {
                result.replace("%40", "@")
            }
        usableData.push(result)

    })
    console.log(usableData)
}

showData()

box = document.getElementById("form-info-container")


    box.textContent = "Thank You! Your response has been recorded."
    `
    <h3>Thank You! Your response has been recorded.</h3>
    <p>${usableData[0]}</p>
    `

