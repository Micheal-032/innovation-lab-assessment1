document.getElementById('startBtn').addEventListener('click', function() {
    let choice;
  
    do {
      choice = prompt(
        "Calculator Menu:\n1. Add\n2. Subtract\n3. Multiply\n4. Divide\n5. Exit\nEnter choice (1-5):"
      );
  
      choice = Number(choice);
  
      if (choice < 1 || choice > 5 || isNaN(choice)) {
        alert("Please enter a valid choice from 1 to 5.");
        continue;
      }
  
      if (choice === 5) {
        alert("Goodbye!");
        break;
      }
  
      let num1 = prompt("Enter first number:");
      let num2 = prompt("Enter second number:");
  
      num1 = Number(num1);
      num2 = Number(num2);
  
      if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers.");
        continue;
      }
  
      switch (choice) {
        case 1:
          alert(num1 + " + " + num2 + " = " + (num1 + num2));
          break;
        case 2:
          alert(num1 + " - " + num2 + " = " + (num1 - num2));
          break;
        case 3:
          alert(num1 + " * " + num2 + " = " + (num1 * num2));
          break;
        case 4:
          if (num2 === 0) {
            alert("Cannot divide by zero.");
          } else {
            alert(num1 + " / " + num2 + " = " + (num1 / num2));
          }
          break;
      }
  
    } while (true);
  });
  