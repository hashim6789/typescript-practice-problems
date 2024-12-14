import * as read from "readline-sync";

class Array2D {
  arr: number[][];
  constructor(size: number) {
    this.arr = new Array(size);
  }

  getArray() {
    console.log(`Enter ${this.arr.length * this.arr.length} numbers :`);

    for (let i = 0; i < this.arr.length; i++) {
      let temp: number[] = new Array(this.arr.length);
      for (let j = 0; j < this.arr.length; j++) {
        temp[j] = Number(read.question());
      }
      this.arr[i] = temp;
    }
  }

  displayArray(): void {
    console.log("The array is :");
    for (let i = 0; i < this.arr.length; i++) {
      let row: string = "";
      for (let j = 0; j < this.arr.length; j++) {
        row += this.arr[i][j] + " ";
      }
      console.log(row);
    }
  }
}

const size: number = Number(read.question("Enter the size of the array : "));
const arr1 = new Array2D(size);
arr1.getArray();
arr1.displayArray();
