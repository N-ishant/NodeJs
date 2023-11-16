// fs MODULE
// The file system(fs) module allows you to work with the file system on your computer
// Read from a file

const fs = require("node:fs");

console.log("FIRST");

// Sync
const fileContents = fs.readFileSync("./file.txt");
console.log(fileContents); //buffer with hexadecimal format

const fileContents1 = fs.readFileSync("./file.txt" , "utf-8");
console.log(fileContents1);

console.log("SECOND");

// Async
fs.readFile('./file.txt' , 'utf-8' , (error,data) => {
    if(error){
        console.log(error);
    }else{
        console.log(data);
    }
});

console.log("THIRD");

/*
1) What node does is keep track of the callback function (in line no.19) and allows for further code to
be executed, when the file reading is complete node will then execute the callback function.
2) Synchronous tasks returns the result while Asynchronous tasks expects the callback function.
*/