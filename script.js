

const firstNumber = window.prompt('Enter first number', 0);

const secondNumber = prompt('Enter second number', 0);

const calc= prompt("choose your operation")

switch (calc) {
    case "add":
        
        alert("The result is " + firstNumber + secondNumber )
      break;
    case "sub":
        
        alert("The result is " + firstNumber - secondNumber )
      break;
    case "mult":
        
        alert("The result is " + firstNumber * secondNumber )
      break;
    case "div":
    
        alert("The result is " + firstNumber / secondNumber )
      break;
    }
    
