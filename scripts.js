/*Hi, i'm in calculator project and i'm in the part
5. Create the functions that populate the display when you click the number buttons. You should be storing the ‘display value’ in a variable somewhere for use in the next step.
 */


const buttons = document.querySelectorAll(".buttons-grid")

buttons.forEach((button) =>{
  button.addEventListener('click', e => {
    return console.log(e.target.innerText)
  })
})



/*
3 + 5. Create three variables for each of the parts of a calculator operation. Create a variable 
for the first number, the operator, and the second number. You’ll use these variables to update 
your display later.
*/
let firstOperand = null;
let secondOperand = null;
let operand = null;

/*
Create a new function operate that takes an operator and 2 numbers and then calls one of the above
 functions on the numbers.
*/
function operate(operator, a, b) {
    //probablemente deba asegurarme  de que
    //ingresen los parametros en tipo Number
    // a = Number(a) ??????????? averiguar
    switch (operator) {
        case '+': 
            return add(a,b);
        case '−': 
            return substract(a,b);
        case '×': 
            return multiply(a,b);
        case '÷':
            if (b === 0) return null
            else return divide(a, b)

        default: return null 
}              
}

//          BASIC OPERATIONS
function add(a, b) {
  return a + b
}

function substract(a, b) {
  return a - b
}

function multiply(a, b) {
  return a * b
}

function divide(a, b) {
  return a / b
}




/*
Create the functions that populate the
display when you click the number buttons.
You should be storing the ‘display value’ 
in a variable somewhere for use in the next step.

(?)Divide and conquer. Que puedo ir solucionando?
-seleccionar los botones del teclado
  + necesito que se dispare
-seleccionar las dos pantallas

(?) accederas al teclado a traves del attr textContent
*/
//(?) debes seleccionar la nodeList con un forEach() --listo
// y un addEventListener que responda al evento click (2da parte: evento por keyInput --listo






  