let currentInnerText = ''
let firstOperand = '';
let secondOperand = '';
let operator = '';
let innerText = ''
let result = 0;

const buttons = document.querySelectorAll('.buttons-grid')
const currentOperationScreen = document.getElementById("current-operation")
const previousOperationScreen = document.getElementById("previous-operation")
const operators = ['÷', '−', '×', '+']

const buttonSwitch = {
  enable: (selector, name) => {
    if (selector === 'id') {
      document.getElementById(name).disabled = false
    } else if (selector === 'class') {

      const buttons = document.getElementsByClassName(name);
      for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = false;
      }
    }
  },
  disable: (selector, name) => {
    if (selector === 'id') {
      document.getElementById(name).disabled = true
    } else if (selector === 'class') {

      const buttons = document.getElementsByClassName(name);
      for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
      }
    }
  },
}

buttonSwitch.disable('class', 'operators')
buttonSwitch.disable('id', 'point')
buttonSwitch.disable('id', 'equal')
buttonSwitch.disable('id', 'clear')
buttonSwitch.disable('id', 'delete')


// features[logic]: display, variable behavior
buttons.forEach((button) => {
  button.addEventListener('click', e => {

    currentInnerText = e.target.innerText  //display content on currentOperationScreen
    currentClassName = e.target.classList

    // #clear behavior
    if (currentInnerText.length > 0) buttonSwitch.enable('id', 'clear')
    if (currentInnerText === 'CLEAR') buttonSwitch.disable('id', 'clear')

    //while not result, display operations on previous-operation
    if (currentInnerText != '=') previousOperationScreen.textContent += currentInnerText

    //variables storing
    if (operators.includes(currentInnerText)) {
      operator = currentInnerText //stores an operator if chosen 

    } else if (operator == '') { //if operator wasn't chosen yet
      firstOperand += (currentInnerText)
      buttonSwitch.enable('class', 'operators')
      buttonSwitch.enable('id', 'point')

      if (firstOperand.includes('.')) {
        buttonSwitch.disable('id', 'point')
      }

    } else if (currentInnerText != '=') {
      buttonSwitch.disable('class', 'operators')
      secondOperand += (currentInnerText)

      
      buttonSwitch.enable('id', 'equal')
      buttonSwitch.enable('id', 'point')
      
      if (secondOperand.includes('.')) {
        buttonSwitch.disable('id', 'point')
      }

    }

    //DISPLAY RESULT... operate() will run
    if (currentInnerText == '=') {
      buttonSwitch.enable('class', 'operators')
      
      result = operate(operator, parseFloat(firstOperand), parseFloat(secondOperand))
      currentOperationScreen.textContent = result
    
      clear()

      //re-stores the variables for the next operation
      firstOperand = result
      secondOperand = ''
      previousOperationScreen.textContent += firstOperand
      buttonSwitch.disable('id', 'equal') // disable to prevent a dangerous bug

    }

    // DEBUG:
    console.log('My little Debuge')
    console.table(
      {
        currentInnerText,
        currentClassName,
        firstOperand,
        secondOperand,
        operator,
        innerText,
        result,
      }
    )

    clearAll(currentInnerText); //clearAll function 
    deleteChar(currentInnerText)

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

function clearAll(characters) {
  if (characters === 'CLEAR') {
    previousOperationScreen.textContent = '';
    window.location.reload(false);
  }
}
function clear () {
 // currentOperationScreen.innerText = ""
  previousOperationScreen.innerText = ""
  firstOperand = ''
  secondOperand = ''
  currentInnerText = ''
}

function deleteChar(characters) {
  if (characters === 'DELETE') {
    //delete secondOperand characters until 0


    //delete operator until 0
    //delete firstOperand characters until 0
  }
}



// una vez haya result
// bloquear punto
// if click number = clear ()
