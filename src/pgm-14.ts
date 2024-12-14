import * as read from "readline-sync";

const size: number = Number(read.question("Enter the size of the array : "));

console.log(`Enter ${size * size} numbers :`);
let arr1: number[][] = new Array(size);
for (let i = 0; i < size; i++) {
  let temp: number[] = new Array(size);
  for (let j = 0; j < size; j++) {
    temp[j] = Number(read.question());
  }
  arr1[i] = temp;
}
console.log("The array1 :", arr1);

console.log(`Enter ${size * size} numbers :`);
let arr2: number[][] = new Array(size);
for (let i = 0; i < size; i++) {
  let temp = new Array(size);
  for (let j = 0; j < size; j++) {
    temp[j] = Number(read.question());
  }
  arr2[i] = temp;
}
console.log("The array2 :", arr2);

for (let i = 0; i < size; i++) {
  for (let j = 0; j < size; j++) {
    arr2[i][j] += arr1[i][j];
  }
}
console.log("Array after sum :", arr2);
