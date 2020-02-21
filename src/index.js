// VARIABLES

const dogImage = document.querySelector("#dog-image-container")
const dogBreedContainer = document.querySelector("#dog-breeds")
const breedDropdown = document.querySelector("#breed-dropdown")


//FUNCTIONS
function image() {
    fetch("https://dog.ceo/api/breeds/image/random/4") 
    .then( resp => resp.json() )
    .then( dogImages => renderDog(dogImages.message) );
};

function renderDog(dogImages) {
    dogImages.forEach(dog => {
    const img = document.createElement('img')
    img.src = dog
    dogImage.append(img)
    })
};

function dogBreed() {
    fetch('https://dog.ceo/api/breeds/list/all')
    .then( resp => resp.json() )
    .then( dogBreeds => renderDogBreeds(dogBreeds.message) );
};

function renderDogBreeds(dogBreeds) {
    for ( const dogBreed in dogBreeds ){
    const li = document.createElement('li');
    li.innerText = dogBreed
    dogBreedContainer.append(li)
    }
}

function handleBreedClick() {
    if (event.target.tagName === 'LI'){
    event.target.style.color = "pink"
    }
}

function handleDogBreedDropdown(){
 
    }

//Event listeners

dogBreedContainer.addEventListener('click', handleBreedClick )
breedDropdown.addEventListener('click', handleDogBreedDropdown )
//invoked functions
image()
dogBreed()
renderDogBreeds()