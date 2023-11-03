//CALLBACK
/*
1) Any Function that is passed as an argument to another function is called a Callback function in 
   JavaScript.

2) The function which accepts a function as its argument or returns a function is called a Higher Order
   Function.
*/

function greet(name){
    console.log(`Hello ${name}`);
}

function higherOrderFunction(callback){
    const name = "Nishant";
    callback(name);
}

higherOrderFunction(greet);