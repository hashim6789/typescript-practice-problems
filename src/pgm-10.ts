import * as read from "readline-sync";

const size: number = Number(read.question("Enter the size of the array : "));

console.log(`Enter ${size} numbers :`);
let array1: number[] = new Array(size);
for (let i = 0; i < size; i++) {
  array1[i] = Number(read.question());
}

console.log("The array 1 is :", array1);

console.log(`Enter ${size} numbers :`);
let array2: number[] = new Array(size);
for (let i = 0; i < size; i++) {
  array2[i] = Number(read.question());
}

console.log("The array 2 is :", array2);

console.log("Arrays after swapped :");
for (let i = 0; i < size; i++) {
  [array1[i], array2[i]] = [array2[i], array1[i]];
}
console.log("Array 1:", array1);
console.log("Array 2:", array2);
