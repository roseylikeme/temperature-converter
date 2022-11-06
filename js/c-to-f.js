
"use strict";

window.onload = init;

function clearResult(){
    document.getElementById("toFahrenheitField").value = ''
    document.getElementById("celciusInput").value = ''
}

function init() {
    const toFahrenheitBtnClick = document.getElementById("toFahrenheitBtn");
    toFahrenheitBtnClick.onclick = convertToFahrenheit;

    const resetBtnClick = document.getElementById("resetBtn");
    resetBtnClick.onclick = clearResult;
}

function convertToFahrenheit() {
    // Find HTML Element
    const celciusNum = document.getElementById("celciusInput")
    const toFahrenheitField = document.getElementById("toFahrenheitField");
    
    let celciusInput = Number(celciusNum.value);

    // Do calculations
    let fahrenheit = (celciusInput * 9/5 + 32).toFixed(1);

    // OUTPUT
    toFahrenheitField.value = fahrenheit + "° Fahrenheit";
}