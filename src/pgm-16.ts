import * as read from "readline-sync";

function primeOrNot(n: number): boolean {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

const n: number = Number(read.question("Enter a number : "));

if (primeOrNot(n)) {
  console.log(`${n} is prime...`);
} else {
  console.log(`${n} is not prime...`);
}
