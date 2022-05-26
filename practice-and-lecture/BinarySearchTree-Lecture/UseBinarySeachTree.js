const BinarySearchTree = require("./BinarySearchTree");

const bst = new BinarySearchTree(5, 5);

bst.insert(2, 2);
bst.insert(20, 20);
bst.insert(1, 1);
bst.insert(4, 4);
bst.insert(15, 15);
bst.insert(21, 21);

bst.remove(20);

console.log(bst);
