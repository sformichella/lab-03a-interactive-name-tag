// Declare button, input space, and name tag name element



const nameTagButton = document.getElementById("name-tag-input-button");

let nameTagInput = document.getElementById("name-tag-input");

let nameTagName = document.getElementById('name-tag-name');

let bodyElement = document.getElementById('body');



// Change the name



nameTagButton.addEventListener('click', () => {
    let userInput = nameTagInput.value
    nameTagName.textContent = userInput
});



// Background Color Stuff



const backgroundButtonBlue = document.getElementById('blue-color-button');

backgroundButtonBlue.addEventListener('click', () => {
    if (bodyElement.style.backgroundColor === 'blue') {
        bodyElement.style.backgroundColor = 'lightgray'
    }
    else {
        bodyElement.style.backgroundColor = 'blue'
    }
})




const backgroundButtonGreen = document.getElementById('green-color-button');

backgroundButtonGreen.addEventListener('click', () => {
    if (bodyElement.style.backgroundColor === 'green') {
        bodyElement.style.backgroundColor = 'lightgray'
    }
    else {
        bodyElement.style.backgroundColor = 'green'
    }
})