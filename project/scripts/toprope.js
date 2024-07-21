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

// climb info

const displayContainer = document.getElementById('container')
const climbList = [
    {
        climbName: "The Angler",
        location: "Joe's Valley",
        climbType: "Bouldering",
        imageUrl: "https://mountainproject.com/assets/photos/climb/111099847_medium_1494339973_topo.jpg?cache=1704547158",
        moreInfo: 'https://www.mountainproject.com/route/105880426/the-angler',
        climbId: 0
    },
    {
        climbName: "Dry Spunk",
        location: "Maple Canyon",
        climbType: "Top Rope",
        imageUrl: "https://mountainproject.com/assets/photos/climb/107846529_medium_1494215147.jpg?cache=1597362517",
        moreInfo: 'https://www.mountainproject.com/route/106004012/dry-spunk',
        climbId: 1
    },
    {
        climbName: "The Lie Back",
        location: "Spring Canyon",
        climbType: "Lead",
        imageUrl: "https://mountainproject.com/assets/photos/climb/118844152_medium_1588961519.jpg?cache=1702073697",
        moreInfo: 'https://www.mountainproject.com/route/106424618/the-lieback',
        climbId: 2
    },
    {
        climbName: "Ostertag",
        location: "Huntington Canyon",
        climbType: "Bouldering",
        imageUrl: "https://mountainproject.com/assets/photos/climb/121784132_medium_1639835431.jpg?cache=1640190904",
        moreInfo: 'https://www.mountainproject.com/route/121785240/ostertag',
        climbId: 3
    },
    {
        climbName: "Mels Prob",
        location: "Huntington Canyon",
        climbType: "Bouldering",
        imageUrl: "https://mountainproject.com/assets/photos/climb/121784373_medium_1639843950.jpg?cache=1640190996",
        moreInfo: 'https://www.mountainproject.com/route/121784333/mels-prob',
        climbId: 4
    },
    {
        climbName: "Left of Coats",
        location: "Huntington Canyon",
        climbType: "Lead",
        imageUrl: "https://mountainproject.com/assets/photos/climb/120273163_medium_1612746369.jpg?cache=1612802130",
        moreInfo: 'https://www.mountainproject.com/route/120270146/left-of-coats',
        climbId: 5
    },
    {
        climbName: "Left of Coats",
        location: "Huntington Canyon",
        climbType: "Top Rope",
        imageUrl: "https://mountainproject.com/assets/photos/climb/120273163_medium_1612746369.jpg?cache=1612802130",
        moreInfo: 'https://www.mountainproject.com/route/120270146/left-of-coats',
        climbId: 6
    },
    {
        climbName: "Twig and Berries",
        location: "Salt Creek Canyon",
        climbType: "Top Rope",
        imageUrl: "https://mountainproject.com/assets/photos/climb/121490079_medium_1634571685_topo.jpg?cache=1634743102",
        moreInfo: 'https://www.mountainproject.com/route/109639591/twig-and-berries',
        climbId: 7
    },
    {
        climbName: "Twig and Berries",
        location: "Salt Creek Canyon",
        climbType: "Lead",
        imageUrl: "https://mountainproject.com/assets/photos/climb/121490079_medium_1634571685_topo.jpg?cache=1634743102",
        moreInfo: 'https://www.mountainproject.com/route/109639591/twig-and-berries',
        climbId: 8
    },
    {
        climbName: "Wind Walker",
        location: "Uinta Mountains",
        climbType: "Lead",
        imageUrl: "https://mountainproject.com/assets/photos/climb/114570135_medium_1531099598.jpg?cache=1702073064",
        moreInfo: 'https://www.mountainproject.com/route/106011932/wind-walker',
        climbId: 9
    },
    {
        climbName: "Sweet Lady J",
        location: "Uinta Mountains",
        climbType: "Lead",
        imageUrl: "https://mountainproject.com/assets/photos/climb/119616293_medium_1600976252.jpg?cache=1605727720",
        moreInfo: 'https://www.mountainproject.com/route/119616261/sweet-lady-j',
        climbId: 10
    },
    {
        climbName: "Sweet Lady J",
        location: "Uinta Mountains",
        climbType: "Top Rope",
        imageUrl: "https://mountainproject.com/assets/photos/climb/119616293_medium_1600976252.jpg?cache=1605727720",
        moreInfo: 'https://www.mountainproject.com/route/119616261/sweet-lady-j',
        climbId: 11
    },
    {
        climbName: "Barn Door",
        location: "Flaming Gorge",
        climbType: "Bouldering",
        imageUrl: "https://mountainproject.com/assets/photos/climb/113460660_medium_1502586123_topo.jpg?cache=1597432601",
        moreInfo: 'https://www.mountainproject.com/route/113460639/barn-door',
        climbId: 12
    },
    {
        climbName: "Wills of Fire",
        location: "Joe's Valley",
        climbType: "Bouldering",
        imageUrl: "https://mountainproject.com/assets/photos/climb/113576656_medium_1505182911.jpg?cache=1657123708",
        moreInfo: 'https://www.mountainproject.com/route/105880494/wills-of-fire',
        climbId: 13
    },
    {
        climbName: "Unknown Chimney",
        location: "Indian Creek",
        climbType: "Top Rope",
        imageUrl: "https://mountainproject.com/assets/photos/climb/121717509_medium_1638212988.jpg?cache=1638222205",
        moreInfo: 'https://www.mountainproject.com/route/121717426/unknown-chimney',
        climbId: 14
    },
    {
        climbName: "Tastes Like Chicken",
        location: "Potash Rd",
        climbType: "Top Rope",
        imageUrl: "https://mountainproject.com/assets/photos/climb/125381501_medium_1700703047.jpg?cache=1700850964",
        moreInfo: 'https://www.mountainproject.com/route/110129738/tastes-like-chicken',
        climbId: 15
    },
    {
        climbName: "Light of the World",
        location: "Potash Rd",
        climbType: "Top Rope",
        imageUrl: "https://mountainproject.com/assets/photos/climb/125381489_medium_1700702948.jpg?cache=1700850977",
        moreInfo: 'https://www.mountainproject.com/route/117566372/light-of-the-world',
        climbId: 16
    },
    {
        climbName: "Light of the World",
        location: "Potash Rd",
        climbType: "Lead",
        imageUrl: "https://mountainproject.com/assets/photos/climb/125381489_medium_1700702948.jpg?cache=1700850977",
        moreInfo: 'https://www.mountainproject.com/route/117566372/light-of-the-world',
        climbId: 16
    },
    {
        climbName: "Tastes Like Chicken",
        location: "Potash Rd",
        climbType: "Lead",
        imageUrl: "https://mountainproject.com/assets/photos/climb/125381501_medium_1700703047.jpg?cache=1700850964",
        moreInfo: 'https://www.mountainproject.com/route/110129738/tastes-like-chicken',
        climbId: 17
    },
    {
        climbName: "Unknown Chimney",
        location: "Indian Creek",
        climbType: "Lead",
        imageUrl: "https://mountainproject.com/assets/photos/climb/121717509_medium_1638212988.jpg?cache=1638222205",
        moreInfo: 'https://www.mountainproject.com/route/121717426/unknown-chimney',
        climbId: 18
    }

]

// put to action


function filteredClimbs(filter) {
    
    for (let i=0; i < filter.length; i++) {
        const climbCard = document.createElement('div')
        climbCard.classList.add('climb-card')
        climbCard.innerHTML = `
        <h2 class="climb-name">${filter[i].climbName}</h2>
        <div class="climb-info">
            
            <p id="${filter[i].climbId}"></p>
        </div>
        <img id="climb-image" alt="${filter[i].climbName}" loading="lazy" src="${filter[i].imageUrl}">
        
       
        `
        
        displayContainer.appendChild(climbCard)

        climbCard.addEventListener("click", () => {
            details.showModal();
            displayMembershipDetails(climbList[filter[i].climbId])
        })
    }

    
}



filteredClimbs(climbList.filter((climb) => climb.climbType == "Top Rope") )



// dialog all



details = document.getElementById("membership-details")
innerDetails = document.getElementById("inner-details")

function displayMembershipDetails(memberLevel) {
    innerDetails.innerHTML = '';
    innerDetails.innerHTML = `
    
    <h3>${memberLevel.climbName}</h3>
    <p>Location: ${memberLevel.location}</p>
    <p>Climb Type: ${memberLevel.climbType}</p>
    <p>For more information click <a href="${memberLevel.moreInfo}" target="blank">here</a></p>
    `

}

closer = document.querySelector("#close-modal")
closer.addEventListener("click", ()=>{
    details.close();
})