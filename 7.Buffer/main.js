// BUFFER
// Node.js provides the buffer feature as a global feature that we can use without having to import it.
// "utf-8" is a default encoding value, hence it is optional.

const string = new Buffer.from("Nishant" , "utf-8");

console.log(string.toString());
console.log(string); // Hexadecimal representation
console.log(string.toJSON()); // String character to Unicode character code

string.write("CodeNation");
console.log(string.toString());