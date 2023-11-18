// Streams
// A stream is a sequence of data that is being moved from one point to another over time.
// Work with data in chunks instead of waiting for the entire data to be available at once.
// Stream is a built-in node module that inherits from the event-emitter class.
// Buffer that Stream use has a default size of 64Kb.
// HTTP Request is a Readable Stream.
// HTTP Response is a Writable Stream.

const fs = require("node:fs");

// Creating a readable stream to read data in chunks from file.txt
const readableStream = fs.createReadStream("./file.txt" , {
    encoding : "utf-8",
    highWaterMark : 2,
});

// Creating a writable stream to write data in chunks to file1.txt
const writableStream = fs.createWriteStream("./file1.txt");

readableStream.on("data" , (chunk) => {
    console.log(chunk);
    writableStream.write(chunk);
});