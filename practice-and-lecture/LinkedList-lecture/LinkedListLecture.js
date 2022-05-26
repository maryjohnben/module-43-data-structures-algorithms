class Node {
    constructor(value, next) {
      this.value = value; // store our data
      this.next = next; // pointer to the next node
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null; // references the first node in the LL
    }
  
    // getter
    // count number of nodes in LL
    // time complexity - O(n)
    get length() {
      let count = 0; // variable to store the count
      let node = this.head; // first node in the LL
  
      while (node) {
        count++; // increment the counter
        node = node.next; // reassign our node to be the next node in the LL
      }
  
      return count;
    }
  
    // time complexity - O(1)
    insertAtHead(value) {
      // create a new node, this.head is the "next"
      // reassign this.head to be the new node we created
      this.head = new Node(value, this.head);
      return this;
    }
  
    // insert at head if LL is empty, insert at end by default
    insert(value, isMatch = (node, index) => index === this.length - 1) {
      if (this.head) {
        // insert
        // determine where to insert
        // find the node to insert after
        const previousNode = this.find(isMatch);
  
        // if we did not find a node
        if (!previousNode) throw new Error("No match found!");
  
        const newNode = new Node(value, previousNode.next); // create a new node and assign next pointer of previousNode to the new node
        previousNode.next = newNode; // make the "next" pointer of the previous node assigned to new node
      } else {
        // in the case where there are no nodes in the LL
        this.insertAtHead(value);
      }
  
      return this;
    }
  
    // find a node in the LL
    // isMatch is a callback function user passes in
    // time complexity - O(n)
    find(isMatch) {
      let index = 0;
      let node = this.head; // first node in LL
  
      while (node) {
        // if we found the node, return it
        if (isMatch(node, index)) {
          return node;
        }
  
        index++; // increment the index #
        node = node.next; // we did not find the node yet, move onto next node
      }
  
      return null; // iterated through entire LL and not did find match
    }
  }
  
  module.exports = LinkedList;