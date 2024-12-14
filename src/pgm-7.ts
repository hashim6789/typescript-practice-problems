import * as read from "readline-sync";

const n: number = Number(read.question("Enter a number :"));

for (let i = 1; i <= 10; i++) {
  console.log(`${i} X ${n} = ${i * n}`);
}
