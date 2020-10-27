// function mergeSortedArray(arr1, arr2) {
//   const mergedArr = [...arr1, ...arr2];
//   let sorted = false
//   while (!sorted ) {
//     sorted = true
//     for (let i = 0; i < mergedArr.length; i += 1) {
//       if (mergedArr[i] > mergedArr[i + 1]) {
//         const removedNum = mergedArr.splice(i, 1)
//         mergedArr.push(...removedNum)
//         sorted = false
//       }
//     }
//   }

//   return mergedArr
// }

function mergeSortedArray2(arr1, arr2) {
  const mergedArr = [];
  let i = 0;
  let j = 0;
  let arr1Item = arr1[i]
  let arr2Item = arr2[j]

  if (!arr1.length) {
    return arr2
  }

  if (!arr2.length) {
    return arr1
  }

  while (arr1Item || arr2Item) {

    if (!arr2Item || arr1Item < arr2Item) {
      mergedArr.push(arr1Item)
      i += 1
      arr1Item = arr1[i]
    } else {
      mergedArr.push(arr2Item)
      j += 1
      arr2Item = arr2[j]
    }
  }

  return mergedArr
}

console.log(mergeSortedArray2([1,36,38, 39, 55], [3,4,46,77]))

function mergeSortedArrays(arr1, arr2) {
  const mergedArr = [];
  let i = 0;
  let j = 0;
  let arr1Item = arr1[i]
  let arr2Item = arr2[j]

  if (!arr1.length) {
    return arr2
  }

  if (!arr2.length) {
    return arr1
  }

  while (arr1Item || arr2Item) {

    if (!arr2Item || arr1Item < arr2Item) {
      mergedArr.push(arr1Item)
      i += 1
      arr1Item = arr1[i]
    } else {
      mergedArr.push(arr2Item)
      j += 1
      arr2Item = arr2[j]
    }
  }

  return mergedArr
}

console.log(mergeSortedArrays([0, 3, 4, 31], [3, 4, 5, 5, 5, 30]))