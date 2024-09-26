const calcBox = document.getElementById('result');
const clearBtn = document.getElementById('clear');
const plusBtn = document.getElementById('plus');
const minusBtn = document.getElementById('minus');
const multBtn = document.getElementById('multiplication');
const divBtn = document.getElementById('division');
const comaBtn = document.getElementById('float');
const equalsBtn = document.getElementById('equals');

function makeNegative() {
  let nega = - parseFloat(calcBox.value);
  calcBox.value = nega;
}

function addNumber(n) {
  calcBox.value += n;
}

clearBtn.addEventListener('click', () => {
  calcBox.value = '';
  total = 0;
  operande1 = null;
  operande2 = null;
});

comaBtn.addEventListener('click', () => {
  if (!calcBox.value.includes('.')) {
    calcBox.value += ".";
  } else {
    console.log('coma already exists, cannot add second one');
  }
});

// main var container 
let total = 0;
let operation;
let operande1 = null;
let operande2 = null;

// equals sign helper
let add = false;
let sub = false;
let mul = false;
let div = false;

plusBtn.addEventListener("click", () => {
  if (calcBox.value) {
    operande1 = parseFloat(calcBox.value);
    calcBox.value = '';
    add = true;
  }
});

minusBtn.addEventListener("click", () => {
  if (calcBox.value) {
    operande1 = parseFloat(calcBox.value);
    calcBox.value = '';
    sub = true;
  }
});

multBtn.addEventListener("click", () => {
  if (calcBox.value) {
    operande1 = parseFloat(calcBox.value);
    calcBox.value = '';
    mul = true;
  }
});

divBtn.addEventListener("click", () => {
  if (calcBox.value) {
    operande1 = parseFloat(calcBox.value);
    calcBox.value = '';
    div = true;
  }
});

equalsBtn.addEventListener('click', () => {
  operande2 = parseFloat(calcBox.value);
  if (operande2) {
    if (add) {
      total = operande1 + operande2;
      calcBox.value = total;
    } else if (sub) {
      total = operande1 - operande2;
      calcBox.value = total;
    } else if (mul) {
      total = operande1 * operande2;
      calcBox.value = total;
    } else if (div) {
      if (operation === 0) {
        console.log("Division by 0");
        calcBox.value = "Erreur";
      } else {
        total = operande1 / operande2;
        calcBox.value = total;
      }
      console.log(operande1, operande2, total);
    }
  }
  add = false;
  sub = false;
  mul = false;
  div = false;
  operande1 = null;
  operande2 = null;
});
