const calcBox = document.getElementById('result');
const clearBtn = document.getElementById('clear');
const plusBtn = document.getElementById('plus');
const minusBtn = document.getElementById('minus');
const multBtn = document.getElementById('multiplication');
const divBtn = document.getElementById('division');
const comaBtn = document.getElementById('float');
const equaltsBtn = document.getElementById('equals');

function makeNega(){
    let nega = - parseFloat(calcBox.value);
    calcBox.value = nega; 
}

function addNumber(n){
    const content = calcBox.value;
    if (n === 0) {
        const tab = content.split('');
        if (tab.length >= 1 && tab[0] === 0){
            console.log("cant add another 0");
        } else {
            calcBox.value = content + n;
        }
    } else {
        calcBox.value = content + n;
    }
}

clearBtn.addEventListener('click', () => {
    calcBox.value = '';
    let total = 0;
});

comaBtn.addEventListener('click', () => {
    const content = calcBox.value;
    const tab = content.split('');
    console.log(tab);
    let coma = false;
    for( let i = 0; i < tab.length; i++){
        if(tab[i] === '.'){
            coma = true;
        }
    }
    if (!coma){
        calcBox.value = content + '.';
    } else {
        console.log('coma already exists, cannot add second one');
    }
});

let i = 0;
function ControlConsole(){
    console.log("ITERATION", ++i);
    console.log("first", first);
    console.log('operation', operation);
    console.log("total", total);
    console.log("add", add);
    console.log("sub", sub);
    console.log("mul", mul);
    console.log("div", div);
}

// main var container 
let total = 0;
let operation;

// equals sign helper
let add = false;
let sub = false;
let mul = false;
let div = false;
let first = true;

plusBtn.addEventListener("click", () => {
    operation = parseFloat(calcBox.value);
    calcBox.value = '';
    if (operation) {
        total = total + operation;
        add = true;
    } else {
        console.log("operation is NaN");
    }
    ControlConsole();
});

minusBtn.addEventListener("click", () => {
    operation = parseFloat(calcBox.value);
    calcBox.value = '';
    if (operation) {
        if (first) {
            total = operation;
            first = false;
            sub = true;
        } else {
            total = total - operation;
            calcBox.value = total;
            sub = true;
        }
    } else {
        console.log("operation is NaN");
    }
    ControlConsole();
});

multBtn.addEventListener("click", () => {
    console.log('multiplication');
    const operation = parseFloat(calcBox.value);
    calcBox.value = '';
    if(total === 0) {
        console.log("result is 0")
        total = 1;
    }
    console.log(total, " * ", operation)
    total *= operation;
    console.log("new ", total);
    mul = true;
});

divBtn.addEventListener("click", () => {
    console.log('division');
    const operation = parseFloat(calcBox.value);
    calcBox.value = '';
    console.log(total, " / ", operation)
        if(operation === 0) {
            console.log("ERROR");
        } else {
            total /= operation;
        }
    console.log("new ", total);
    div = true;
});

equaltsBtn.addEventListener('click', () => {
    operation = parseFloat(calcBox.value);
    if (operation) {
        if(add) {
            total = total + operation;
            calcBox.value = total;
        } else if (sub) {
            total = total - operation;
            calcBox.value = total;
        } else if (mul) {
            calcBox.value = total * operation;
            console.log(total, operation);
        } else if (div) {
            if(operation === 0) {
                console.log("ERROR");
            } else {
                calcBox.value = total / operation;
                console.log(total, operation);
            }
        }
    }
    ControlConsole();
    add = false;
    sub = false;
    mul = false;
    div = false;
});