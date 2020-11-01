class Node {
  constructor(value) {
    this.value = value 
    this.next = null
  }
}

class Queue {
  constructor() {
    this.first = null,
    this.last =  null,
    this.length = 0
  }
  peek(){
    return this.first
  }

  enqueue(value) {
    const newNode = new Node(value)
    if (this.length === 0 ) {
      this.first = newNode
      this.last = newNode
    } else {
      this.last.next = newNode
      this.last = newNode
    }
    this.length +=  1
    return this
  }

  dequeue() {
    if (this.length === 0) {
      return null
    }
    let dequeued
    if (this.first === this.last) {
      this.last = null
      this.length--
      return this.first.value
    } else {
      dequeued = this.first.value;
      this.first = this.first.next
    }

    this.length --

    return dequeued
  }
}


const myQueue = new Queue()
myQueue.enqueue("jassi")
myQueue.enqueue("nannu")

console.log(myQueue.dequeue())
console.log(myQueue.dequeue())
console.log(myQueue.dequeue())
console.log(myQueue.dequeue())
console.log(myQueue.dequeue())