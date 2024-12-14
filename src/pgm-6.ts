import * as read from "readline-sync";

const input: number = Number(read.question("Enter a number : "));

switch (input) {
  case 1:
    console.log("The day is Sunday...");
    break;
  case 2:
    console.log("The day is Monday...");
    break;
  case 3:
    console.log("The day is Tuesday...");
    break;
  case 4:
    console.log("The day is Wednesday...");
    break;
  case 5:
    console.log("The day is Thursday...");
    break;
  case 6:
    console.log("The day is Friday...");
    break;
  case 7:
    console.log("The day is Saturday...");
    break;
  default:
    console.log("Invalid input!!!");
    break;
}
