const Queue = require("./Queue");

const myQueue = new Queue();

myQueue.enqueue(["cheeseburger", "coke", "fries"]);
myQueue.enqueue(["chicken nuggets"]);
myQueue.enqueue(["blizzard"]);
myQueue.enqueue(["chili cheese fries"]);

console.log(myQueue.dequeue());
console.log(myQueue);