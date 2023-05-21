
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToHead(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  addToTail(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  removeHead() {
    if (!this.head) {
      return null;
    }
    const removedValue = this.head.value;
    this.head = this.head.next;
    if (!this.head) {
      this.tail = null;
    }
    return removedValue;
  }

  removeTail() {
    if (!this.head) {
      return null;
    }
    let currentNode = this.head;
    let previousNode = null;
    while (currentNode.next) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    const removedValue = currentNode.value;
    if (previousNode) {
      previousNode.next = null;
      this.tail = previousNode;
    } else {
      this.head = null;
      this.tail = null;
    }
    return removedValue;
  }

  search(value) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    return null;
  }

  isEmpty() {
    return this.head === null;
  }

  print() {
    let currentNode = this.head;
    const values = [];
    while (currentNode) {
      values.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(values.join(" -> "));
  }
}

// Example usage:

const linkedList = new LinkedList();
linkedList.addToTail(10);
linkedList.addToTail(20);
linkedList.addToTail(30);
linkedList.print(); // Output: 10 -> 20 -> 30

linkedList.addToHead(5);
linkedList.print(); // Output: 5 -> 10 -> 20 -> 30

// linkedList.removeTail();
linkedList.print(); // Output: 5 -> 10 -> 20

const searchResult = linkedList.search(10);
console.log(searchResult); // Output: Node { value: 10, next: Node { value: 20, next: null } }

console.log(linkedList.isEmpty()); // Output: false


