const display = document.getElementById('display');
const resultDisplay = document.getElementById('result-display');
const body = document.body; // function for switch theme button

// convert the * and / to x and ÷ in the display
function appendValue(value) { 
    if (value === 'x') {
        display.value += '×';  
    } else if (value === '÷') {
        display.value += '÷';  
    } else {
        display.value += value; 
    }
}

// function for C to clear input
function clearDisplay() {
    display.value = '';
    resultDisplay.value = '';
}

// to function the convert sign to still calculate
function calculateResult() { 
    try {
        let expression = display.value;
        expression = expression.replace(/×/g, '*').replace(/÷/g, '/');
        let result = eval(expression); 
        resultDisplay.value = result;
    } catch (error) {
        resultDisplay.value = 'Error';
    }
}
// function for switch theme button
function toggleTheme() {   
    body.classList.toggle('light-theme');
}