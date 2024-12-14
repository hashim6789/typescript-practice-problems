import * as read from "readline-sync";

const income: number = Number(read.question("Enter the annual income : "));
function calculateIncomeTax(income: number): number {
  if (income >= 1000000) {
    return (income * 30) / 100;
  } else if (income >= 500000) {
    return (income * 20) / 100;
  } else if (income >= 250000) {
    return (income * 5) / 100;
  }
  return 0;
}

console.log("Income tax amount = ", calculateIncomeTax(income));
