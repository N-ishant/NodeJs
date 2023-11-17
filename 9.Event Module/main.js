// We can register multiple listeners for the same event.
const EventEmitter = require('node:events');

const emitter = new EventEmitter();

emitter.on("order-pizza" , (size , topping) => {
    console.log(`Order received! Baking a ${size} pizza with ${topping}`);
});

emitter.on("order-pizza" , (size) => {
    if(size === "large"){
        console.log("Serving Complimentary Drink");
    }
})

console.log("Do work before event occurs in the system");  //non blocking manner
emitter.emit("order-pizza" , "large" , "mushroom");