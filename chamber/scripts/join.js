const d = new Date()
let year = d.getFullYear()
let lastModif = new Date(document.lastModified);
let currentYear = document.getElementById("currentyear")
currentYear.textContent = year
let last = document.getElementById("lastModified")
last.textContent = lastModif

const levels = [
    {
      name: 'NP Membership',
      cost: "Free",
      benefits: "For non profit organizations, training, and advertising included"
    },
    {
        name: 'Bronze Membership',
        cost: "$100",
        benefits: "Includes trainings and advertising"
    },
    {
        name: 'Silver Membership',
        cost: "$200",
        benefits: "Inludes training, advertising, and special events"
    },
    {
        name: 'Gold Membership',
        cost: "$300",
        benefits: "Includes training, advertising, special events, and event discounts"
    }
  ];
  
submitButton = document.getElementById('submit-button')

details = document.getElementById("membership-details")
innerDetails = document.getElementById("inner-details")

function displayMembershipDetails(memberLevel) {
    innerDetails.innerHTML = '';
    innerDetails.innerHTML = `
    
    <h3>${memberLevel.name}</h3>
    <p>${memberLevel.cost}</p>
    <p>${memberLevel.benefits}</p>
    `

}





npButton = document.getElementById("np-button")
bronzeButton = document.getElementById("bronze-button")
silverButton = document.getElementById("silver-button")
goldButton = document.getElementById("gold-button")

closer = document.querySelector("#close-modal")
    
closer.addEventListener("click", ()=>{
        details.close();
    })



npButton.addEventListener("click", () => {
    details.showModal();
    displayMembershipDetails(levels[0])
})
bronzeButton.addEventListener("click", ()=> {
    details.showModal();
    displayMembershipDetails(levels[1])
})
silverButton.addEventListener("click", ()=> {
    details.showModal();
    displayMembershipDetails(levels[2])
})
goldButton.addEventListener("click", ()=> {
    details.showModal();
    displayMembershipDetails(levels[3])
})

