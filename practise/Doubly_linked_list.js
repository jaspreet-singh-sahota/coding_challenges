class Node {
  constructor(value) {
    this.value = value,
    this.next = null,
    this.prev = null
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null,
      prev: null
    }

    this.tail = this.head
    this.length = 1
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value)
      currentNode = currentNode.next
    }
    return array;
  }

  append(value) {
    const newNode = new Node(value)
    newNode.prev = this.tail
    this.tail.next = newNode
    this.tail = newNode
    this.length += 1
  }

  prepend(value) {
    const newNode = new Node(value)
    newNode.next = this.head
    this.head = newNode
    this.length += 1
  }

  insert(index, value) {
    let newNode = new Node(value)
    let previousNode = this.traverseToIndex(index -1)
    let followingNode = previousNode.next
    previousNode.next = newNode
    newNode.prev = previousNode
    newNode.next = followingNode
    followingNode.prev = newNode
    this.length += 1
  }

  remove(index) {
    let previousNode = this.traverseToIndex(index - 1)
    let nodeToRemove = previousNode.next
    let followingNode = nodeToRemove.next
    previousNode.next = followingNode
    followingNode.prev = previousNode
    this.length -= 1
    console.log(this.printList())
  }

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head
    while (counter !== index) {
      currentNode = currentNode.next
      counter += 1
    } 

    return currentNode
  }

  reverse() {
    if (!this.head.next) {
      return this.head;
    }
    let first = this.head;
    this.tail = this.head;
    let second = first.next;

    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }

    this.head.next = null;
    this.head = first;
    console.log(this.printList())
  }
}

const myLinkedList = new DoublyLinkedList(3)
myLinkedList.append(5)
myLinkedList.append(6)
myLinkedList.append(7)
myLinkedList.append(8)
myLinkedList.append(9)
myLinkedList.prepend(2)
myLinkedList.prepend(1)
myLinkedList.insert(5, 55)
myLinkedList.remove(1)
myLinkedList.remove(2)
myLinkedList.reverse()
// console.log(myLinkedList)