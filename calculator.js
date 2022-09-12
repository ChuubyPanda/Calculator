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
        if(a.includes('.') || b.includes('.')){
            return add(parseFloat(a),parseFloat(b));
        }
        return add(parseInt(a), parseInt(b));
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
const decimal = document.querySelector('.decimal')
number.forEach(number => {
    number.addEventListener('click', () => {
        if(displayText[displayText.length-2] === '+' || displayText[displayText.length-2] === '-' || displayText[displayText.length-2] === '*' || displayText[displayText.length-2] === '/'){
            display.textContent = number.textContent;
        }else{
            display.textContent =  display.textContent + number.textContent;
        }
        displayText = displayText + number.textContent;
    });
});
sign.forEach(sign => {
    sign.addEventListener('click', () => {
        if(displayText[displayText.length-1] !== sign.textContent){
            display.textContent =  sign.textContent; 
            displayText = displayText + ' ' + sign.textContent + ' ';
        }
    });
});
equal.addEventListener('click', function(){
    const calculate = displayText.split(' ');
    let answer = 0;
    console.log(calculate);
    while(calculate.includes('+') || calculate.includes('-') || calculate.includes('*') || calculate.includes('/')){
        for(i = 0; i < calculate.length;i++){
            if(calculate[i] === '*'){
                answer = operate(calculate[i], calculate[i-1], calculate[i+1]);
                calculate.splice(i-1, 3, answer);
            }else if(calculate[i] === '/'){
                answer = operate(calculate[i], calculate[i-1], calculate[i+1]);
                calculate.splice(i-1, 3, answer);
            }
        }
        for(i = 0;i < calculate.length;i++){
            if(calculate[i] === '+'){
                answer = operate(calculate[i], calculate[i-1], calculate[i+1])
                calculate.splice(i-1, 3, answer);

            }else if(calculate[i] === '-'){
                answer = operate(calculate[i], calculate[i-1], calculate[i+1])
                calculate.splice(i-1, 3, answer);
            }
        }
    }
    display.textContent = answer;
    displayText = answer;
    });
clear.addEventListener('click', () => {
    display.textContent = '';
    displayText = '';
})

decimal.addEventListener('click', ()=>{
    if(!display.textContent.includes('.')){
        display.textContent = display.textContent + '.';
        displayText += '.';
    }
})