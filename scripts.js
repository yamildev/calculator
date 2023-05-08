let currentInnerText = ''
let firstOperand = '';
let secondOperand = '';
let operator = '';
let innerText = ''
let result = 0;

const buttons = document.querySelectorAll('.buttons-grid')
const previousOperationScreen = document.getElementById("previous-operation")
const currentOperationScreen = document.getElementById("current-operation")

function clear(something) {
  if (something === 'CLEAR') {
    currentOperationScreen.innerText = ""
    previousOperationScreen.innerText = ""
    firstOperand = ''
    seconOperand = ''
    currentInnerText = ''
  }
}
// features[logic]: display, variable behavior
buttons.forEach((button) => {
  button.addEventListener('click', e => {
    

    //mostrar contenido en currentOperationScreen
    currentInnerText = e.target.innerText
    console.log('currentInnerText: ',currentInnerText)
    //console.log('firstOperand: ', firstOperand) //debug
    //console.log('secondOperand: ', secondOperand) //debug


    currentOperationScreen.textContent += currentInnerText
    console.log('currentOperationScreen: ', currentOperationScreen.textContent)

    //variables storing
    if (operators.includes(currentInnerText)) {
      operator = currentInnerText //stores the operator, si eligo un operador, guardalo 
      console.log('operator: ', operator)  

    } else if (operator == '') {

      firstOperand += parseFloat(currentInnerText)
      console.log('firstOperand: ', firstOperand) 
      console.log('firstOperand type: ', typeof(firstOperand))     

    } else if (currentInnerText != '=') {
      secondOperand += parseFloat(currentInnerText)
      parseFloat(secondOperand)
      console.log('secondOperand: ', secondOperand)
      console.log('secondOperand type: ', typeof(secondOperand))     
    }

    //run operate()
    if (currentInnerText == '=') {
      result = operate(operator, parseFloat(firstOperand), parseFloat(secondOperand))
      console.log('result: ', result)
      console.log('typeof(result): ', typeof(result))
      
      //console.log(currentOperationScreen)
    }
    console.log('*************************************') //debug
    clear(currentInnerText); //clearAll function 


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

//        BASIC OPERATIONS
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

