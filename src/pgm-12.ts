import * as read from "readline-sync";

const size: number = Number(read.question("Enter the size of the array : "));
let arr: number[] = new Array(size);

console.log(`Enter ${size} numbers :`);
for (let i = 0; i < size; i++) {
  arr[i] = Number(read.question());
}
console.log("The array is :", arr);

for (let i = 1; i < arr.length; i++) {
  let current = arr[i];
  let j = i - 1;
  while (j >= 0 && arr[j] > current) {
    arr[j + 1] = arr[j];
    j--;
  }
  arr[j + 1] = current;
}

console.log("After sorted array :", arr);
