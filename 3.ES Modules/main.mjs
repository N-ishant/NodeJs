// ES Modules
// The file extension of ES Modules is ".mjs"
// Using ES Modules instead of CommonJS
// All patterns in main.mjs are "Default Export"
// In Default Export, we can assign any name while importing

import add1 from "./math1.mjs";
console.log(add1(5,5));

import sum from "./math2.mjs";
console.log(sum(11,5));

import maths from './math3.mjs';
console.log(maths.addition(12,78));
console.log(maths.sub(60,20));
//Pattern 4 => Destructuring
const {addition , sub} = maths;
console.log(addition(4,1));
console.log(sub(1,1));