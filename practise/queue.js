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

  
}


const myQueue = new Queue()
myQueue.enqueue("jassi")
myQueue.enqueue("nannu")

console.log(myQueue.dequeue())
console.log(myQueue.dequeue())
console.log(myQueue.dequeue())
console.log(myQueue.dequeue())
console.log(myQueue.dequeue())