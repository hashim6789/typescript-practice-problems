import * as read from "readline-sync";

const P: number = Number(read.question("Enter the principle amount : "));
const R: number = Number(read.question("Enter the interest rate : "));
const n: number = Number(read.question("Enter no. of years : "));

const SI = (P * R * n) / 100;
console.log("The simple interest :", SI);
