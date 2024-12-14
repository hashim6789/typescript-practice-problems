import * as read from "readline-sync";

const num1: number = Number(read.question("Enter two numbers :\n"));
const num2: number = Number(read.question());

console.log(`The sum of ${num1} and ${num2} : ${num1 + num2}`);
