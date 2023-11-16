const fs = require("node:fs/promises");

console.log("FIRST");

// By Promise
fs.readFile("./file.txt" , "utf-8")
  .then((data) => console.log(data))
  .catch((error) => console.log(error))

console.log("SECOND");  

// By Async Await  
async function readFile(){
    try{
        const data = await fs.readFile("./greet.txt" , "utf-8");
        console.log(data);
    }catch(error){
        console.log(error);
    }
}
readFile();

console.log("THIRD");