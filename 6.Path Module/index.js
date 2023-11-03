// PATH MODULE
// The Path Module provides utilities for working with file and directory paths.

//Imorting Path Module
const path = require("node:path");

console.log(__filename); //string that represents the full path to the file "index.js"
console.log(__dirname); //string that represents the full path to the folder where "index.js" is located

// Different METHODS available on the "Path Module" are :-

// 1)Base Name => It returns the last portion of the path
console.log(path.basename(__filename));
console.log(path.basename(__dirname));

// 2)EXT Name => It returns the extension of the path 
console.log(path.extname(__filename));   // .js
console.log(path.extname(__dirname));  // "empty string" since it does not have a (.) character in its path

// 3) Parse Method => It returns an object whose properties represents significant elements of the path
console.log(path.parse(__filename));

// 4) Format Method => It returns a path string given an object
console.log(path.format(path.parse(__filename)));

// 5) isAbsolute Method => It returns whether a path is absolute or not.
console.log(path.isAbsolute(__filename));
console.log(path.isAbsolute("./data.json"));  // "./" is relative