function isOperator(value) {
    return value === "/" || value === "*" || value === "-" || value === "+";
  }
  
  function isNumber(value) {
    return !isNaN(value);
  }
  
  function wipe(value) {
    var screen = document.getElementById("screen");
    screen.value = '';
  }
  
  function calc(val) {
    let screen = document.getElementById("screen").value;
    let lastChar = screen[screen.length - 1];
    let operatorCount = 0;
  
    for (let i = 0; i < screen.length; i++) {
      if (isOperator(screen[i])) {
        operatorCount++;
      }
    }
    if (operatorCount <= 1 && isNumber(lastChar)) {
      document.getElementById("screen").value = eval(screen);
    }
  }
  
  function backspace() {
    var screen = document.getElementById("screen");
    screen.value = screen.value.substring(0, screen.value.length - 1);
  }
  
  function show(value) {
    var screen = document.getElementById("screen");
    var lastCharacter = screen.value[screen.value.length - 1];
    var operators = ["+", "-", "*", "/"];
    var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
    if (!operators.includes(lastCharacter) || screen.value.length === 0) {
      if (operators.includes(value) || numbers.includes(lastCharacter) || screen.value.length === 0) {
        screen.value += value;
      }
    } else if (numbers.includes(value)) {
      screen.value += value;
    }
}

document.addEventListener("keydown", function(event) {
    if (event.code === "Digit1") {
      show("1");
    } else if (event.code === "Digit2") {
      show("2");
    } else if (event.code === "Digit3") {
      show("3");
    } else if (event.code === "Digit4") {
      show("4");
    } else if (event.code === "Digit5") {
      show("5");
    } else if (event.code === "Digit6") {
      show("6");
    } else if (event.code === "Digit7") {
      show("7");
    } else if (event.code === "Digit8") {
      show("8");
    } else if (event.code === "Digit9") {
      show("9");
    } else if (event.code === "Digit0") {
      show("0");
    } else if (event.code === "Equal") {
      show("+");
    } else if (event.code === "Minus") {
      show("-");
    } else if (event.code === "Slash") {
      show("/");
    } else if (event.code === "Asterisk") {
      show("*");
    } else if (event.code === "Enter") {
      calc();
    }
    else if (event.code === "Backspace") {
      backspace();
    }
});
