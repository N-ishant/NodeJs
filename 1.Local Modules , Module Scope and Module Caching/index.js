/*
(1) To include the math module into index.js, we need to use a function which is always available in node
and that is the "require" function.
(2) "require" function is used to import a module by path.
(3) To this "require" function we pass in the path to the module as a string.
(4) The value of "module.exports" object is what the "require" function returns for the corresponding module.
*/

const math = require('./math.js');

console.log("Hello from index.js");
console.log(math.addFn(3,7));
console.log(math.sub(60,40));
console.log(math);

//Module Scope
require('./batman.js');    //We don't have to specify .js as the file extension while requiring Js files.
require("./superman");
// In above loc we can see that both names "Batman" and "Superman" are logged and there is no conflict
// or error and this is because each module in nodeJs has its own scope. 

//Module Caching
const superHero = require('./super-hero.js');
console.log(superHero.getName());
superHero.setName("Antman");
console.log(superHero.getName());

const newSuperHero = require('./super-hero.js');
console.log(newSuperHero.getName());