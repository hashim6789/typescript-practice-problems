import * as read from "readline-sync";

const mark: number = Number(
  read.question("Enter your total mark percentage(%) : ")
);

if (mark <= 100 && mark >= 90) {
  console.log("Your grade is : A");
} else if (mark >= 80) {
  console.log("Your grade is : B");
} else if (mark >= 70) {
  console.log("Your grade is : C");
} else if (mark >= 60) {
  console.log("Your grade is : D");
} else if (mark >= 50) {
  console.log("Your grade is : E");
} else if (mark >= 0) {
  console.log("Failed...");
} else {
  console.log("Invalid input");
}
