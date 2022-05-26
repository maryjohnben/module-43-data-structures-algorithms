// FIFO - First In First Out
class Node {
    constructor(value, next = null) {
      this.value = value;
      this.next = next;
    }
  }
  
  class Queue {
    constructor() {
      this.first = null; // head
      this.last = null; // tail
    }
  
    // time complexity
    // enqueue, dequeue - O(1)
    enqueue(value) {
      const newNode = new Node(value); // create a new node
  
      if (!this.first) {
        // if there is no "first" node
        this.first = newNode;
      } else {
        // make the "next" node of the current last node point to the new node
        this.last.next = newNode;
      }
  
      // make the new node the last node in the queue
      this.last = newNode;
  
      return this;
    }
  
    dequeue() {
      if (this.first) {
        const dequeued = this.first; // reference the current first node
  
        // update our pointer to be the next node of the dequeued node
        this.first = dequeued.next;
        // this.first = this.first.next;
  
        // if the node we dequeued happens to be the last in queue
        if (dequeued === this.last) {
          this.last = null;
        }
  
        return dequeued.value;
      }
    }
  }
  
  module.exports = Queue;