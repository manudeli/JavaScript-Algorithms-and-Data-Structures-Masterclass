class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

let first = new Node(12);

first.next = new Node(13);
first.next.prev = first;
console.log(first);

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    let poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }
  shift() {
    if (this.length === 0) return undefined;
    let oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }
  unshift(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let current;
    if (index <= this.length / 2) {
      current = this.head;
      for (let i = 0; i < index; i++) {
        current = current.next;
      }
    } else {
      current = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        current = current.prev;
      }
    }
    return current;
  }
  set(index, val) {
    let foundNode = this.get(index);
    if (foundNode !== null) return !!(foundNode.val = val);
    else return false;
  }
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);

    let newNode = new Node(val);
    let afterNode = this.get(index);
    let beforeNode = afterNode.prev;

    (beforeNode.next = newNode), (newNode.prev = beforeNode);
    (newNode.next = afterNode), (afterNode.prev = newNode);
    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    let removeNode = this.get(index);
    let beforeNode = removeNode.prev;
    let afterNode = removeNode.next;

    (afterNode.prev = removeNode.prev), (beforeNode.next = removeNode.next);
    (removeNode.prev = null), (removeNode.next = null);
    this.length--;
    return removeNode;
  }
}

list = new DoublyLinkedList();

list.push(14);
list.push(15);
list.push(16);
list.push(17);
list.push(18);
list.push(19);
list.push(20);
list.push(21);
console.log(list);

console.log(list.pop());
console.log(list);

console.log(list.shift());
console.log(list);

console.log(list.unshift("unshiftedItem"));

console.log(list);
console.log(list.get(1));
console.log(list.get(6));

console.log(list.set(1, "setItem"));
console.log(list);

console.log(list.insert(3, "insertItem"));
console.log(list);
console.log(list.insert(8, "insertItem"));
console.log(list.insert(10, "insertItem"));
console.log(list.insert(-2, "insertItem"));
console.log(list.insert(4, "insertItem"));
console.log(list);

console.log(list.remove(0));
console.log(list.remove(10));
console.log(list.length);
console.log(list.remove(9));
console.log(list.remove(8));
