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
console.log(`Enter ${size} numbers :`);
let array1 = new Array(size);
for (let i = 0; i < size; i++) {
    array1[i] = Number(read.question());
}
console.log("The array 1 is :", array1);
console.log(`Enter ${size} numbers :`);
let array2 = new Array(size);
for (let i = 0; i < size; i++) {
    array2[i] = Number(read.question());
}
console.log("The array 2 is :", array2);
console.log("Arrays after swapped :");
for (let i = 0; i < size; i++) {
    [array1[i], array2[i]] = [array2[i], array1[i]];
}
console.log("Array 1:", array1);
console.log("Array 2:", array2);
