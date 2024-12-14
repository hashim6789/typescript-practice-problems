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
const input = Number(read.question("Enter a number : "));
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
