import * as read from "readline-sync";

const str: string = read.question("Enter a string : ");

let i = 0;
let j = str.length - 1;
let flag = true;
while (i < j) {
  if (str[i] !== str[j]) {
    flag = false;
    break;
  }
  i++;
  j--;
}

if (flag) {
  console.log("The string is a palindrome...");
} else {
  console.log("The string is not a palindrome...");
}
