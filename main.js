function add(num1,num2){

    num1 = Number(document.getElementById('num1').value);
    num2 = Number(document.getElementById('num2').value);

    const result = document.getElementById('Result');
    
    result.innerText = num1 + num2;
}

function sub(num1,num2){

    num1 = Number(document.getElementById('num1').value);
    num2 = Number(document.getElementById('num2').value);

    const result = document.getElementById('Result');
    
    result.innerText = num1 - num2;
}

function multiply(num1,num2){

    num1 = Number(document.getElementById('num1').value);
    num2 = Number(document.getElementById('num2').value);

    const result = document.getElementById('Result');
    
    result.innerText = num1 * num2;
}

function divide(num1,num2){

    num1 = Number(document.getElementById('num1').value);
    num2 = Number(document.getElementById('num2').value);

    const result = document.getElementById('Result');
    
    result.innerText = num1 / num2;
}