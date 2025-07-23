document.getElementById("startBtn").addEventListener("click", function () {
    alert("Welcome! You will enter two numbers. Results will be shown in the console.");
  
    var num1 = promptForNumber("Enter the first number:");
    let num2 = promptForNumber("Enter the second number:");
  
    const title = "Arithmetic operations result:";
    console.clear();
    console.log(title);
    console.log(num1 + " + " + num2 + " = " + (num1 + num2));
    console.log(num1 + " - " + num2 + " = " + (num1 - num2));
    console.log(num1 + " * " + num2 + " = " + (num1 * num2));
  
    if (num2 !== 0) {
      console.log(num1 + " / " + num2 + " = " + (num1 / num2));
      console.log(num1 + " % " + num2 + " = " + (num1 % num2));
    } else {
      console.log("Division or modulus by zero is not allowed.");
    }
  });
  
  function promptForNumber(message) {
    let num;
    do {
      let input = prompt(message);
      num = Number(input);
      if (isNaN(num)) {
        alert("Please enter a valid number.");
      }
    } while (isNaN(num));
    return num;
  }
  