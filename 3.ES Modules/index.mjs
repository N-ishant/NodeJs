// NAMED EXPORT
// In Named Export, The Variable and Function being exported must match while importing it.

// METHOD 1
import * as math from "./math4.mjs";

const {add , sub} = math;

console.log(add(2,2));
console.log(sub(2,1));

/*
// METHOD 2
import {add , sub} from "./math4.mjs"
console.log(add(90,10));
console.log(sub(90,10));
*/