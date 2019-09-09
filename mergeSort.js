const array = [1,4,2,9]

const mergeSort = array => {
  console.log("mergeSort called with array: ", array)
  const sortedArray = [...array]
  if (sortedArray.length < 2) {
    return array
  }
  const length = sortedArray.length
  const middle = Math.floor(length / 2)
  const left = sortedArray.slice(0, middle)
  const right = sortedArray.slice(middle)

  return merge(mergeSort(left), mergeSort(right))
}

const merge = (left, right) => {
  console.log("merge called with left: ", left, " and right: ", right);
  const results = []
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      results.push(left.shift())
    } else {
      results.push(right.shift())
    }
  }
  return results.concat(left, right)
}

let answer = mergeSort(array)
console.log(answer);
