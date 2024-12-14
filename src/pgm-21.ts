import * as read from "readline-sync";

const size: number = Number(read.question("Enter the size of an array : "));
let arr: number[] = new Array(size);
for (let i = 0; i < arr.length; i++) {
  arr[i] = Number(read.question());
}
console.log("The entered array is :", arr);

let result: number[] = new Array(size - 1);
for (let i = 0; i < size - 1; i++) {
  result[i] = arr[i] * arr[i + 1];
}

console.log("The resulted array is :", result);
