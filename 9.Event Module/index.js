// EVENTS MODULE
// Emit => produce , generate
/*
1) The Events Module allows us to work with Events in Node.js
2) An Event is an action or an occurrence that has happened in our application that we can respond to.
3) Using the Events Module, we can dispatch our own custom events and respond to those custom events in a 
   non-blocking manner.
4) The Events Module returns a class called "Event Emitter" which encapsulates functionality to emit
   events and respond to events.
5) A listener is a callback function that gets executed when the corresponding event is emitted.   
*/

const EventEmitter = require('node:events');

//Instantiate the class to create an object
const emitter = new EventEmitter();

// Registering a Listener to respond to order-pizza event
emitter.on("order-pizza" , () => {
    console.log("Order received! Baking a pizza");
});

//Emitting an order placed event
emitter.emit("order-pizza");  //this method accepts the event name as argument