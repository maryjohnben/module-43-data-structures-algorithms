/**
 * `Node` is used to store values in a linked list
 */
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

/**
 * The `LinkedList` class holds a reference to the `head` node and has functions that update the list.
 */

class LinkedList {
  constructor() {
    this.head = null; //list strarting with head null
  }

  /**
   * The number of nodes in the linked list
   *
   * @returns {number}
   *   The number of nodes in the linked list
   */

  get length() {
    let result = 0;
    let node = this.head;

    while (node) { //as long as node is not null
      result++;
      node = node.next;
    }
    return result;
  }

  /**
   * Insert a new value at the head of the list
   * @param value
   *  The new value to insert
   *
   * @returns {LinkedList}
   *  this linked list so methods can be chained
   */
  insertAtHead(value) {
    this.head = new Node(value, this.head);
    return this;
  }


///////////////////////////INSERTING AT END///////////////////////////////
//Create a new node with the value that you want to insert.
// If the list is empty, set head to the new node.
// If the list isn't empty, iterate through the list until you reach the end of the list. Then set the end node's next property to the new node.
//modified can be found below this
// insert(value) {
//   const newNode = new Node(value)

//   if (this.head) { //if this.head is valid
//     let tail = this.head;
//     while(tail.next){
//       tail = tail.next;
//     }
//     tail.next = newNode;
//   } else {
//     this.insertAtHead(value)
//   }
//   return this;
// }

insert(value, isMatch = (node, index) => index === this.length - 1) {
  if (this.head) {
    const previousNode = this.find(isMatch);

    if (!previousNode) {
      throw new Error("No match found.");
    }

    previousNode.next = new Node(value, previousNode.next);
  } else {
    this.insertAtHead(value)
  }
  return this;
}

//find()
/**
   * Find a node in the linked list.
   *
   * @param isMatch
   *  Function that returns `true` if the current node matches the search criteria
   *
   * @returns {Node|null}
   *  The first node where `isMatch(node, index) === true`,
   *  or `null` if no match is found
   */
  //replaced
//  find(isMatch) {
//   let index = 0;
//   let node = this.head;
//   while (node) {
//     if (isMatch(node, index)) {
//       return node;
//     }
//     index++;
//     node = node.next;
//   }
//   return null;
// }
//possible becuase of findWithPrevious()
find(isMatch) {
  return this.findWithPrevious(isMatch)[0];
}
//////////////////////////////////////////FIND WITH PREVIOUS
  /**
   * Find a node, and its previous node, in the linked list.
   * @param isMatch
   *  Function that returns `true` if the current node matches the search criteria
   *
   * @returns {[Node|null, Node|null]}
   *  The first element is the node where `isMatch(node, index) === true`, or `null` if no match is found.
   *  The second element is the previous Node, or `null` if no match is found.
   *  This second element is also `null` if `this.head` is the matched node.
   */
   findWithPrevious(isMatch) {
    let index = 0;
    let previous = null;
    let node = this.head;
    while (node) {
      if (isMatch(node, index)) {
        return [node, previous];
      }
      index++;
      previous = node;
      node = node.next;
    }
    return [null, null];
  }
  ///////////////////////////////REMOVE
   /**
   * Remove the first node where `isMatch(node, index, this) === true`.
   *
   * @param isMatch
   *  Function that returns `true` if the current node matches the node to be removed
   *
   * @returns {*}
   *  The value of the removed node where `isMatch(node, index) === true`, or `null` if no match is found
   */

    remove(isMatch) {
      const [matchedNode, previousNode] = this.findWithPrevious(isMatch);
  
      if (!matchedNode) {
        return null;
      }
  
      if (this.head === matchedNode) {
        this.head = this.head.next;
      } else {
        previousNode.next = matchedNode.next;
      }
      return this;
    }
}

module.exports = LinkedList;