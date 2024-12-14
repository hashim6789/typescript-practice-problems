import * as read from "readline-sync";

const limit: number = Number(read.question("Enter a limit : "));
console.log("The odd numbers less than", limit);

for (let i = 1; i <= limit; i++) {
  if (i % 2 === 1) {
    console.log(i);
  }
}
