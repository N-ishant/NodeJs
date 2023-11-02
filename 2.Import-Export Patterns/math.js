// Pattern 1
/*
module.exports = function add(a,b){
    return a+b;
}
*/

//Pattern 2
/*
//module.exports = function add(a,b){
  //  return a+b;                         //We cannot write like this if we have more than one function.
//}

module.exports.add = (a,b) =>{
    return a+b;
}

module.exports.sub = (x,y) =>{
    return x-y;
}
*/

//Pattern 3
exports.add = (a, b) => a + b;
exports.sub = (x, y) => x - y;

//Note => Always use "module.exports" and try to avoid "exports".