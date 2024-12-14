import * as read from "readline-sync";

const n: number = Number(read.question("Enter a number : "));

for (let i = 1; i <= n; i++) {
  let row: string = "";
  for (let j = 1; j <= i; j++) {
    row += j;
  }
  console.log(row);
}
