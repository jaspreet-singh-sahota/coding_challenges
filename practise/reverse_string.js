function reverse(str) {
  return str.split('').reverse().join('')
}

function reverse2(str) {
  return [...str].reverse().join('')
}

function reverse3(str) {
  if (!str || typeof str !== 'string' ) {
    return 'Not a String'
  } else if (str.length < 2) {
    return str
  }

  const reverseArr = []
  for (let i = str.length -1; i >= 0; i -= 1) {
    reverseArr.push(str[i])
  }
  return reverseArr.join('')
}

console.log(reverse('My name is jaspreet singh'))
console.log(reverse2('My name is jaspreet singh'))
console.log(reverse3('My name is jaspreet singh'))
console.log(reverse3('a'))
console.log(reverse3([]))
console.log(reverse3(5))

console.log(typeof 'hello')
console.log(typeof 5)
console.log(typeof [])
console.log(typeof {})