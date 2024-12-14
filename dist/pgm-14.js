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
console.log(`Enter ${size * size} numbers :`);
let arr1 = new Array(size);
for (let i = 0; i < size; i++) {
    let temp = new Array(size);
    for (let j = 0; j < size; j++) {
        temp[j] = Number(read.question());
    }
    arr1[i] = temp;
}
console.log("The array1 :", arr1);
console.log(`Enter ${size * size} numbers :`);
let arr2 = new Array(size);
for (let i = 0; i < size; i++) {
    let temp = new Array(size);
    for (let j = 0; j < size; j++) {
        temp[j] = Number(read.question());
    }
    arr2[i] = temp;
}
console.log("The array2 :", arr2);
for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
        arr2[i][j] += arr1[i][j];
    }
}
console.log("Array after sum :", arr2);
