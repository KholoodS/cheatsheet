const arrayContainer = document.querySelector('.array-container');
const addElementButton = document.getElementById('add-element');
const sortButton = document.getElementById('sort-array');

const clearArrayButton = document.getElementById('clear-array');


// Add event listeners for your existing buttons
addElementButton.addEventListener('click', addElement);
sortButton.addEventListener('click', sortArray);
clearArrayButton.addEventListener('click', clearArrayContainer);


let array = [];
let sortingSteps = [];
let isAddingElement = false;

function addElement() {
    if (isAddingElement) {
        return; // Don't add elements if an operation is in progress
    }

    const elementInput = document.getElementById('element-input');
    const elementValue = parseInt(elementInput.value);

    if (!isNaN(elementValue)) {
        isAddingElement = true; // Set the flag to indicate operation in progress
        
        array.push(elementValue);
        renderArray();
        elementInput.value = ''; // Clear the input field
        isAddingElement = false; // Reset the flag
        
    } else {
        alert('Please enter a valid number.');
    }
}




function sortArray() {
    array.sort((a, b) => a - b);
    renderArray();
}


function renderArray() {
    clearArrayContainer();
    for (const value of array) {
        const bar = document.createElement('div');
        bar.className = 'array-bar';
        bar.style.height = `${value * 3}px`; // Adjust the height of bars as needed
        arrayContainer.appendChild(bar);
    }
}

function clearArrayContainer() {
    arrayContainer.innerHTML = '';
}

function changeURL() {
    const languageSelect = document.getElementById('Language');
    const selectedLanguage = languageSelect.value;

    let URL = window.location.href.split('/');
    URL[3] = selectedLanguage;
    window.location.assign(URL.join('/'));
}
