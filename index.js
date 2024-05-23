// Global Vars
const lightModeBtn = document.getElementById("lightMode")
const darkModeBtn = document.getElementById("darkMode")
const submitBtn = document.getElementById("newCats")
let fillingCatsAray = []
// Event Listeners
document.addEventListener("DOMContentLoaded", function() {
    darkMode()
})

lightModeBtn.addEventListener('click', function() {
    lightMode()
})

darkModeBtn.addEventListener('click', function() {
    darkMode()
})

submitBtn.addEventListener('submit', catSubmit)



// CallBack Functions
function darkMode(){
 document.body.style.backgroundColor = "black"  
 document.body.style.color = "white" 
}

function lightMode(){
    document.body.style.backgroundColor = "white"  
    document.body.style.color = "Black" 
}

function catSubmit(data){
    data.preventDefault()
    const theCatSubmit = submitBtn.querySelector("#findCat").value
    gettingDataFromJson()
    const thefinding = fillingCatsAray.find(catInArray => catInArray.breed === theCatSubmit)


    const breedOFCat = document.getElementById("breed-Cat")
    const countryOFCat = document.getElementById('country-Cat')
    const originOFCat = document.getElementById('origin-Cat')
    const coatOFCat = document.getElementById('coat-Cat')
    const patternOFCat = document.getElementById('pattern-Cat')
    
breedOFCat.textContent = `Breed: ${thefinding.breed}`
countryOFCat.textContent = `Country: ${thefinding.country}`
originOFCat.textContent = `Origin: ${thefinding.origin}`
coatOFCat.textContent = `Coat: ${thefinding.coat}`
patternOFCat.textContent = `Pattern: ${thefinding.pattern}`

console.log(thefinding.origin)

}

async function gettingDataFromJson(){
    await fetch("http://localhost:3000/Cats")
    .then(resp => resp.json())
    .then(data => { fillingCatsAray = data
})
}