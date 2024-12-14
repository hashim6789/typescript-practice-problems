import * as read from "readline-sync";

class Calculator {
  operand1: number;
  operand2: number;
  constructor(operand1: number, operand2: number) {
    this.operand1 = operand1;
    this.operand2 = operand2;
  }

  addition(): number {
    return this.operand1 + this.operand2;
  }
  subtraction(): number {
    return this.operand1 - this.operand2;
  }
  division(): number {
    return this.operand1 / this.operand2;
  }
  multiplication(): number {
    return this.operand1 * this.operand2;
  }
}

const num1: number = Number(read.question("Enter 2 operands :\n"));
const num2: number = Number(read.question());
const c1 = new Calculator(num1, num2);
console.log("Sum =", c1.addition());
console.log("Difference =", c1.subtraction());
console.log("Quotient =", c1.division());
console.log("Product =", c1.multiplication());
