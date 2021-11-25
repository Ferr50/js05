function sum() {

    var value01 = document.getElementById("value01").valueAsNumber;
    var value02 = document.getElementById("value02").valueAsNumber;

    var result = value01 + value02;

    document.getElementById("result").innerHTML = result;

}

function subtract() {

    var value01 = document.getElementById("value01").valueAsNumber;
    var value02 = document.getElementById("value02").valueAsNumber;

    var result = value01 - value02;
    
    document.getElementById("result").innerHTML = result;

}

function times() {

    var value01 = document.getElementById("value01").valueAsNumber;
    var value02 = document.getElementById("value02").valueAsNumber;

    var result = value01 * value02;
    
    document.getElementById("result").innerHTML = result;

}

function over() {

    var value01 = document.getElementById("value01").valueAsNumber;
    var value02 = document.getElementById("value02").valueAsNumber;

    var result = value01 / value02;
    
    document.getElementById("result").innerHTML = result;

}