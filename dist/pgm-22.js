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
const size = Number(read.question("Enter the size of the array : "));
function getArray(size) {
    console.log(`Enter ${size * size} numbers :`);
    let arr = new Array(size);
    for (let i = 0; i < size; i++) {
        let temp = new Array(size);
        for (let j = 0; j < size; j++) {
            temp[j] = Number(read.question());
        }
        arr[i] = temp;
    }
    return arr;
}
function sumArray(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr1[i].length; j++) {
            arr1[i][j] += arr2[i][j];
        }
    }
    return arr1;
}
const arr1 = getArray(size);
console.log("The array1 :", arr1);
const arr2 = getArray(size);
console.log("The array2 :", arr2);
console.log("The sum array of these 2 array is :", sumArray(arr1, arr2));
