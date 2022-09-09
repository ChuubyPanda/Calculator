displayText = '';
function add(a, b){
    return a + b;
}
function sub(a, b){
    return a-b;
}
function multiply(a, b){
    return a*b;
}
function division(a, b){
    return a/b;
}
function operate(operator, a, b){
    if(operator === '+'){
        return add(a, b);
    }else if(operator === '-'){
        return sub(a, b);
    }else if(operator === '*'){
        return multiply(a, b);
    }else if(operator === '/'){
        return division(a, b);
    }
}
const number = document.querySelectorAll('.number');
const sign = document.querySelectorAll('.sign');
const display = document.querySelector('.display');
const equal = document.querySelector('.equal');
const clear = document.querySelector('.clear');
number.forEach(number => {
    number.addEventListener('click', () => {
        display.textContent =  display.textContent + number.textContent;
        displayText = displayText + number.textContent;
    });
});
sign.forEach(sign => {
    sign.addEventListener('click', () => {
        display.textContent =  display.textContent +  ' ' + sign.textContent + ' '; 
        displayText = displayText + ' ' + sign.textContent + ' ';
    });
});
equal.addEventListener('click', function(){
    const calculate = displayText.split(' ');
    let answer = 0;
    console.log(calculate);
    for(i = 0;i < calculate.length;i++){
        console.log(calculate[i-1]);
        if(calculate[i] === '+' | calculate[i] === '-' | calculate[i] === '*' | calculate[i] === '/'){
            console.log(operate(calculate[i], calculate[i-1], calculate[i+1]));
        }
    }
    });
clear.addEventListener('click', () => {
    display.textContent = '';
})
