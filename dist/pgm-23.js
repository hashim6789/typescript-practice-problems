"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const read = __importStar(require("readline-sync"));
class Array2D {
    constructor(size) {
        this.arr = new Array(size);
    }
    getArray() {
        console.log(`Enter ${this.arr.length * this.arr.length} numbers :`);
        for (let i = 0; i < this.arr.length; i++) {
            let temp = new Array(this.arr.length);
            for (let j = 0; j < this.arr.length; j++) {
                temp[j] = Number(read.question());
            }
            this.arr[i] = temp;
        }
    }
    displayArray() {
        console.log("The array is :");
        for (let i = 0; i < this.arr.length; i++) {
            let row = "";
            for (let j = 0; j < this.arr.length; j++) {
                row += this.arr[i][j] + " ";
            }
            console.log(row);
        }
    }
}
const size = Number(read.question("Enter the size of the array : "));
const arr1 = new Array2D(size);
arr1.getArray();
arr1.displayArray();
