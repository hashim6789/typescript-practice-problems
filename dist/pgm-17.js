"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const read = __importStar(require("readline-sync"));
class Calculator {
    constructor(operand1, operand2) {
        this.operand1 = operand1;
        this.operand2 = operand2;
    }
    addition() {
        return this.operand1 + this.operand2;
    }
    subtraction() {
        return this.operand1 - this.operand2;
    }
    division() {
        return this.operand1 / this.operand2;
    }
    multiplication() {
        return this.operand1 * this.operand2;
    }
}
const num1 = Number(read.question("Enter 2 operands :\n"));
const num2 = Number(read.question());
const c1 = new Calculator(num1, num2);
console.log("Sum =", c1.addition());
console.log("Difference =", c1.subtraction());
console.log("Quotient =", c1.division());
console.log("Product =", c1.multiplication());
