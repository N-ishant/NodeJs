// JSON is a data interchange format commonly used with Web Servers.
// JSON data is similar to JavaScript Object but the key is also wrapped with quotes.
// If we import a JSON file, the require function will parse the contents into a JavaScript Object.
/* In line no.9, if we doesn't give json extension then node.js will first try to find "data.js" before
   tring to find "data.json". If a 'data.js' file were to exist in our folder then node.js would import 
   that file and not the 'data.json' file which may lead to issues. That's why always use the extension
   when importing JSON files.  */

const data = require('./data.json');
console.log(data);
console.log(data.age);   //undefined because age doesn't exist in data.json
console.log(data.Name);