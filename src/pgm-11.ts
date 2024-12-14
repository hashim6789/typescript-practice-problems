import * as read from "readline-sync";

const size: number = Number(read.question("Enter the size of the array : "));
let arr: number[] = new Array(size);

console.log(`Enter ${size} numbers :`);
for (let i = 0; i < size; i++) {
  arr[i] = Number(read.question());
}
console.log("The array is :", arr);

const evenSum = arr.reduce((acc: number, curr: number) => {
  if (curr % 2 === 0) {
    acc += curr;
  }
  return acc;
}, 0);

console.log("Sum of the even numbers :", evenSum);
