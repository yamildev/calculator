let currentInnerText = ''
let firstOperand = '';
let secondOperand = '';
let operator = '';
let innerText = "";

const buttons = document.querySelectorAll('.buttons-grid')
const previousOperationScreen = document.getElementById("previous-operation")
const currentOperationScreen = document.getElementById("current-operation")
// expresión regular para coincidir con números positivos o negativos, con decimales o no entre 0 y 9.
const numberRegex = /^-?\d*\.?\d+$/;

function clear(something) {
  if (something === 'CLEAR')
    currentOperationScreen.innerText = ""
  previousOperationScreen.innerText = ""

}

/*
while (!firstOperand.includes(objToArr(operators))) {
      firstOperand += displayValue
    }
*/
buttons.forEach((button) => {
  button.addEventListener('click', e => {
    //mostrar contenido en currentOperationScreen
    currentInnerText = e.target.innerText
    console.log('currentInnerText: ',currentInnerText)
    currentOperationScreen.textContent += currentInnerText
    console.log('currentOperationScreen: ', currentOperationScreen.textContent)

    //variables storing
    if (operators.includes(currentInnerText)) {
      operator = currentInnerText //stores the operator, si eligo un operador, guardalo 
      console.log('operator: ', operator)     

    } else if(operator == '') {

      firstOperand += parseFloat(currentInnerText)
      console.log('firstOperand: ', firstOperand) 
      console.log('firstOperand type: ', typeof(firstOperand))     
      
    } else {
      secondOperand += parseFloat(currentInnerText)
      parseFloat(secondOperand)
      console.log('secondOperand: ', secondOperand)
      console.log('secondOperand type: ', typeof(secondOperand))     

    }
    //run operate()
    if (currentInnerText == '=') {
      currentOperationScreen.textContent = operate(operator, parseFloat(firstOperand), parseFloat(secondOperand))
      console.log(currentOperationScreen)
    }
    console.log('*****************************************************************************')
    clear(currentInnerText);

  })
});

function operate(operator, a, b) {

  switch (operator) {
    case '+':
      return add(a, b);
    case '−':
      return substract(a, b);
    case '×':
      return multiply(a, b);
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

const operators = ['÷','−','×','+']

/*               codigo de validacion segun openAI
    if (!isNaN(parseFloat(currentInnerText))) { //if currentInnerText is a number, do this:
      if (inner === '') { //If an operator doesn't still selected
        // if(currentInnerText === )
        firstOperand += currentInnerText
        console.log('firstOperand: ', firstOperand)
        console.log('typeof', typeof (firstOperand))
        //si innerText es igual a alguno de los valores del objeto,
        //agregar el resultado a operator
      } else {
        secondOperand += currentInnerText
      }
    }
*/
