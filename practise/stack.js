class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Stack {
  constructor(value) {
    this.top = null,
    this.bottom = null,
    this.length = 0
  }

  peek() {
    return this.top.value
  }

  push(value) {
    const newNode = new Node(value);

    if (this.length  === 0 ) {
      this.bottom = newNode
      this.top = newNode
    } else {
      const holdingPointer = this.top
      this.top = newNode
      this.top.next = holdingPointer
    }
    this.length += 1
    return this
  }

 
}

const myStack = new Stack()
myStack.push("google")
myStack.push("netflix")
myStack.push("yahoo")
console.log(myStack.pop())
console.log(myStack.pop())
console.log(myStack.pop())
console.log(myStack.pop())

// console.log(myStack)