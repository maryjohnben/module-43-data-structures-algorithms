const LinkedList = require("./linkedList");

const linkedList = new LinkedList();

// linkedList.insertAtHead("One");
// linkedList.insertAtHead(2);
// linkedList.insertAtHead(56);
linkedList.insertAtHead(6);
// linkedList.insertAtHead(21);
// linkedList.insertAtHead(258);
linkedList.insert("One");
linkedList.insert(2);
// result
// LinkedList {
//     head: Node { value: 'One', next: Node { value: 2, next: null } }
//   }

// You can use `find()` to update the value of a node in the list.
//the value to be found should be present in order for this to work as intended
// linkedList.find((node) => node.value === "One").value = 1;

// console.log(linkedList);

// console.log(
//   "find 2",
//   linkedList.find((node) => node.value === 2)
// );

// console.log(
//   "find 3",
//   linkedList.find((node) => node.value === 3)
// );
// console.log(linkedList);
//result so far
// find 2 Node { value: 2, next: null }
// find 3 null
// LinkedList {
//   head: Node { value: 'One', next: Node { value: 2, next: null } }
// }
// console.log(linkedList.find((node, index) => index === 2));
linkedList.insert(1.5, (node) => node.value === "One"); //new value is inserted after the found value 'one' in this case.
console.log(linkedList.length)
console.log(linkedList);