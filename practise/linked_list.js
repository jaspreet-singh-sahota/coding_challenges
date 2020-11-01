class Node {
  constructor(value) {
    this.value = value,
    this.next = null
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null
    }

    this.tail = this.head

    this.length =  1
  }

  append(value) {
    const newNode = new Node(value)

    this.tail.next = newNode
    this.tail = newNode
    this.length +=  1
    return this
  }

  
}

const myLinkedList = new LinkedList(10)
myLinkedList.append(16)
myLinkedList.append(5)
myLinkedList.preAppend(1)
myLinkedList.append(16)
myLinkedList.insert(3, 29)
myLinkedList.insert(1, -10)
myLinkedList.remove(1)
myLinkedList.remove(1)
myLinkedList.reverse()
