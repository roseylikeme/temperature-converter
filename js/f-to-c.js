
"use strict";

window.onload = init;

function clearResult(){
    document.getElementById("answerField").value = ''
    document.getElementById("fahrenInput").value = ''
}

function init() {
    const toCelciusBtnClick = document.getElementById("toCelciusBtn");
    toCelciusBtnClick.onclick = convertToCelcius;
}

function convertToCelcius() {
    // Find HTML Element
    const fahrenheitNum = document.getElementById("fahrenInput");
    
    let fahrenInput = Number(fahrenheitNum.value);

    let sum = ((fahrenInput-32) * 5/9).toFixed(2);
    const answerField = document.getElementById("answerField");

    // Print Output
    answerField.value = sum + "° Celcius";
}