const {
  add,
  subtract,
  multiplication,
  division,
  percentage,
} = require("./calculator.js");
const operation = "percentage";
const num1 = 20;
const num2 = 20;
let result;
switch (operation) {
  case "add":
    result = add(num1, num2);
    break;
  case "subtract":
    result = subtract(num1, num2);
    break;
  case "multiplication":
    result = multiplication(num1, num2);
    break;
  case "division":
    result = division(num1, num2);
    break;
  case "percentage":
    result = percentage(num1, num2);
    break;
  default:
    console.log("Invalid operation");
    result = null;
}
if (result !== null) {
  console.log(`The result of ${operation} operation is: ${result}`);
}
