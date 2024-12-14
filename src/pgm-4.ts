import * as read from "readline-sync";

const mark: number = Number(read.question("Enter your mark : "));
if (mark >= 50) {
  console.log("Passed...");
} else {
  console.log("Failed...");
}
