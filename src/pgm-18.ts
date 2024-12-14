import * as read from "readline-sync";

console.log("Enter the marks scored by the students");
const writtenTest: number = Number(read.question("Written test = "));
const labExam: number = Number(read.question("Lab exams ="));
const assignments: number = Number(read.question("Assignments ="));

const grade: number =
  (writtenTest * 70) / 100 + (labExam * 20) / 100 + (assignments * 10) / 100;

console.log("Grade of the student is", grade);
