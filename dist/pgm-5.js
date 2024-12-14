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
const mark = Number(read.question("Enter your total mark percentage(%) : "));
if (mark <= 100 && mark >= 90) {
    console.log("Your grade is : A");
}
else if (mark >= 80) {
    console.log("Your grade is : B");
}
else if (mark >= 70) {
    console.log("Your grade is : C");
}
else if (mark >= 60) {
    console.log("Your grade is : D");
}
else if (mark >= 50) {
    console.log("Your grade is : E");
}
else if (mark >= 0) {
    console.log("Failed...");
}
else {
    console.log("Invalid input");
}
