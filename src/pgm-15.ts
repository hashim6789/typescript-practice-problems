import * as read from "readline-sync";

function getArray(): void {
  for (let i = 0; i < size; i++) {
    array[i] = Number(read.question());
  }
}

function displayArray(): void {
  console.log(array.toString());
}

const size: number = Number(read.question("Enter the size of the array : "));
let array: number[] = new Array(size);

console.log(`Enter ${size} numbers :`);
getArray();
console.log("The entered array is :");
displayArray();
