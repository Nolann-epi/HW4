/* Tutorial 4
   Example 1 JavaScript code
*/


console.log("Nolann Holvoet's Output from Tutorial 4 Example 1");

const calculator = (num1, num2, operand) => {
    switch(true) {
        case (operand === "+"):
            return (num1 + num2);
        case (operand === "-"):
            return (num1 - num2);
        case (operand === "*"):
            return (num1 * num2);
        case (operand === "/"):
            return (num1 / num2);
    }
}

console.log("Nolann Holvoet's Output from Tutorial 4 Example 2");


const num1 = prompt("Enter number 1");
const num2 = prompt("Enter number 2");
const operand = prompt("Enter your operand (+,-,*,/)");

if ((operand === "+" || operand === "-" || operand === "*" || operand === "/") && (!isNaN(num1) && !isNaN(num2))) {
    const result = calculator(Number(num1), Number(num2), operand);
    console.log(`${num1} ${operand} ${num2} = ${result}`);
}
else {
    console.log("Input(s) doesn't match.. refresh page");
}