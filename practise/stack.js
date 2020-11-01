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