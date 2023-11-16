// Writing contents into a file
// By default fileWrite overwrites the file contents.

const fileSystem = require("node:fs");

// Sync
fileSystem.writeFileSync("./greet.txt" , "Hello World! ");

// Async
fileSystem.writeFile("./greet.txt" , " Hello Light!" , {flag : "a"} , (err) => {
    if(err){
        console.log(err);
    }else{
        console.log("File Written");
    }
});

fileSystem.appendFileSync("./greet.txt" , `${Date.now()} Hey There\n`);

//Copy a file
fileSystem.cpSync("./file.txt" , "./copy.txt");
fileSystem.cpSync("./file.txt" , "./copy1.txt");

// Delete a file
fileSystem.unlinkSync("./copy1.txt");

//Statistics of a File
console.log(fileSystem.statSync("./greet.txt"));
console.log(fileSystem.statSync("./greet.txt").isFile());