// function reoccurringFirstItem(arr) {
//   const uniqueArr = []
//   const firstNum = []

//   arr.forEach(num => !uniqueArr.includes(num) ? uniqueArr.push(num) : firstNum.push(num))
//   return firstNum[0]
// }



console.log(reoccurringFirstItem2([1, 7, 8, 2, 3, 4, 5, 4, 5, 6, 8]))
console.log(reoccurringFirstItem2([1, 2, 3, 4, 5, 4, 5, 6, 8]))
console.log(reoccurringFirstItem2([2, 5, 5, 2]))
console.log(reoccurringFirstItem2([1, 2, 3, 4, 6, 8]))