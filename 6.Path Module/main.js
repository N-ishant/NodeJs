// 6) Join Method => It joins all given path segments together using the platform specific seperator as a 
// delimiter and then normalizes the resulting path.

const path1 = require("path");
console.log(path1.join("folder1" , "folder2" , "index.html"));
console.log(path1.join("/folder1" , "folder2" , "index.html"));
console.log(path1.join("/folder1" , "//folder2" , "index.html"));
console.log(path1.join("/folder1" , "//folder2" , "../index.html"));