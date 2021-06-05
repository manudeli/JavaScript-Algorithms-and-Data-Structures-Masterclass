// Comparisons with Arrays

// Lists
/*
1. Do not have indexes!
2. Connected vid nodes with a next pointer
3. Random access is not allowed
*/

// Arrays
/*
1. Indexed in order!
2. Insertion and deletion can be expensive
3. Can quickly be accessed at a specific index
*/

// piece of data - val
// reference to next node - next

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Pushing pseudo code
  // 1. This function should accept a value
  push(val) {
    // 2. Create a new node using the value passed to the function
    let newNode = new Node(val);
    if (!this.head) {
      // 3. If there is no head property on the list, set the head and tail to be the newly created node
      this.head = newNode;
      this.tail = newNode;
    } else {
      // 4. Otherwise set the next property on the tail to be the new node and set the tail property on the list to be the newly created node
      this.tail.next = newNode;
      this.tail = newNode;
    }
    // 5. Increment the length by one
    this.length++;
    // 6. Return the linked list
    return this;
  }
}

let first = new Node("Hi");
first.next = new Node("there");
first.next.next = new Node("how");
first.next.next.next = new Node("are");
first.next.next.next.next = new Node("you");

console.log(first);

let list = new SinglyLinkedList();
list.push("HELLO");
list.push("GOODBYE");
list.push("MY NAME IS");
console.log(list);
