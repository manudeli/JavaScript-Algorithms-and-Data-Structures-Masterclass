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

let first = new Node("Hi");
first.next = new Node("there");
first.next.next = new Node("how");
first.next.next.next = new Node("are");
first.next.next.next.next = new Node("you");

console.log(first);

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

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

  traverse() {
    let current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }

  pop() {
    // If there are no nodes in the list, return undefined
    if (this.length === 0) {
      return undefined;
    }
    let current = this.head;
    let newTail = current;
    // Loop through the list until you reach the tail
    while (current.next) {
      // Set the next property of the 2nd to last node to be null
      newTail = current;
      current = current.next;
    }
    // Set the tail to be the 2nd to last node
    this.tail = newTail;
    this.tail.next = null;
    // Decrement the length of the list by 1
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    // Return the value of the node removed
    return current;
  }

  shift() {
    // If there are no nodes, return undefined
    if (this.length === 0) return undefined;
    // Store the current head property in a variable
    let currentHead = this.head;
    // Set the head property to be the current head's next property
    this.head = currentHead.next;
    // Decrement the length by 1
    this.length--;
    if (this.length === 0) this.tail = null;
    // Return the value of the node removed
    return currentHead;
  }

  // This function should accept a value
  unshift(val) {
    // Create a new node using the value passed to the function
    let newNode = new Node(val);
    // If there is no head property on the list, set the head and tail to be the newly created node
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Otherwise set the newly created node's next property to be the current head property on the list
      newNode.next = this.head;
      // Set the head property on the list to be that newly created node
      this.head = newNode;
    }
    // Increment the length of the list by 1
    this.length++;
    // Return the linked list
    return this;
  }

  get(index) {
    // If the index is less than zero or greater than or equal to the length of the list, return null
    if (index < 0 || index >= this.length) return null;
    // Loop through the list until you reach the index and return the node at that specific index
    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  set(index, val) {
    // Use your get function to find the specific node.
    let nodeFound = this.get(index);
    // If the node is not found, return false
    if (!nodeFound) return false;
    // If the node is found, set the value of that node to be the value passed to the function and return true
    else {
      nodeFound.val = val;
      return true;
    }
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);
    let newNode = new Node(val);
    let prev = this.get(index - 1);
    let temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }

  remove(index) {
    // If the index is less than zero or greater than the length, return undefined
    if (index < 0 || index > this.length) return undefined;
    // If the index is the same as the length-1, pop
    if (index === this.length - 1) return this.pop();
    // If the index is 0, shift
    if (index === 0) return this.shift();
    // Otherwise, using the get method, access the node at the index - 1
    let previousNode = this.get(index - 1);
    // Set the next property on that node to be the next of the next node
    let removed = previousNode.next;
    previousNode.next = removed.next;
    // Decrement the length
    this.length--;
    // Return the value of the node removed
    return removed;
  }
  print() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev = null;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}

let list = new SinglyLinkedList();
list.push("HELLO");
list.push("GOODBYE");
list.push("!");
console.log(list);

list.traverse();
console.log(list.pop());
console.log(list);

console.log(list.shift());
console.log(list.shift());
console.log(list);

console.log(list.unshift("jongkykySecond"));
console.log(list.unshift("jongkykyFirst"));
console.log(list);

console.log(list.get(0));
console.log(list.get(1));
console.log(list);

console.log(list.set(0, "itemSet"));
console.log(list.set(-1, "itemSet"));
console.log(list.set(6, "itemSet"));
console.log(list);

console.log(list.insert(6, "FIRST INSERT"));
console.log(list.insert(-2, "FIRST INSERT"));
console.log(list.insert(2, "FIRST INSERT"));

console.log(list);
console.log(list.remove(100));
console.log(list.remove(-1));
console.log(list.remove(0));
list.print();
list.reverse();
list.print();
