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




const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: 'true'
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: 'true'
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: 'true'
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: 'false'
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: 'true'
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: 'false'
    }
]

const numberOfCreditsSpan = document.getElementById('num-credits')

const container = document.getElementById('course-container')

function displayCourses() {
    let numberOfCredits = 0
    for (let i=0; i < courses.length; i++) {
        
        const courseItem = document.createElement('div')
        courseItem.classList.add('course-item')
        courseItem.classList.add(`${courses[i].completed}`)
        courseItem.innerHTML = `
        <h2 class="course-title">${courses[i].subject} ${courses[i].number}</h2>
        `
        container.appendChild(courseItem)
        numberOfCredits += courses[i].credits
        console.log(`${numberOfCredits}`)
    }
    numberOfCreditsSpan.textContent = numberOfCredits
    }

displayCourses()

function filteredCourses(filter) {
let numberOfCredits = 0
for (let i=0; i < filter.length; i++) {
    const courseItem = document.createElement('div')
    courseItem.classList.add('course-item')
    courseItem.classList.add(`${filter[i].completed}`)
    courseItem.innerHTML = `
     <h2 class="course-title">${filter[i].subject} ${filter[i].number}</h2>
    `
    container.appendChild(courseItem)
    numberOfCredits += courses[i].credits
    
}
    numberOfCreditsSpan.textContent = `${numberOfCredits}`    
}

const allButton = document.getElementById("all-button")
const cseButton = document.getElementById("cse-button")
const wddButton = document.getElementById("wdd-button")

allButton.addEventListener('click', function() {
    container.innerHTML = ''
    displayCourses()
})

cseButton.addEventListener('click', function() {
    container.innerHTML = ''
    filteredCourses(courses.filter((course) => course.subject === 'CSE') )
    

})
wddButton.addEventListener('click', function() {
    container.innerHTML = ''
    filteredCourses(courses.filter((course) => course.subject === 'WDD') )
    
})


