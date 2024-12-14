import * as read from "readline-sync";

const size: number = Number(read.question("Enter the size of the array : "));

function getArray(size: number): number[][] {
  console.log(`Enter ${size * size} numbers :`);
  let arr: number[][] = new Array(size);
  for (let i = 0; i < size; i++) {
    let temp: number[] = new Array(size);
    for (let j = 0; j < size; j++) {
      temp[j] = Number(read.question());
    }
    arr[i] = temp;
  }
  return arr;
}

function sumArray(arr1: number[][], arr2: number[][]): number[][] {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1[i].length; j++) {
      arr1[i][j] += arr2[i][j];
    }
  }
  return arr1;
}

const arr1: number[][] = getArray(size);
console.log("The array1 :", arr1);

const arr2: number[][] = getArray(size);
console.log("The array2 :", arr2);

console.log("The sum array of these 2 array is :", sumArray(arr1, arr2));
