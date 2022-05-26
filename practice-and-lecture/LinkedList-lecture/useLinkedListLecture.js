const LinkedList = require("./LinkedList");

const myLinkedList = new LinkedList();

myLinkedList.insertAtHead("A");
myLinkedList.insertAtHead("B");
myLinkedList.insertAtHead("C");
myLinkedList.insertAtHead("D");

// console.log(myLinkedList.find((node, index) => node.value === "C"));
// console.log(myLinkedList.find((node, index) => index === 2));

// console.log(myLinkedList.head);

console.log(myLinkedList.insert("Hello", (node, index) => node.value === "D"));
console.log(myLinkedList.insert("World")); // insert the node at the end of LL

console.log(myLinkedList.head.next.next.next.next);
// console.log(myLinkedList.length);