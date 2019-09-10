const arr = [3, 5, 2, -4, 8, 11]

const twoSumSimple = (arr, s) => {
  let sums = []
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] + arr[j] === s) {
        sums.push([arr[i], arr[j]])
      }
    }
  }
  return sums;
}

const twoSum = (arr, s) => {
  const numObj = {}
  const pairs = []

  for (let i = 0; i < arr.length; i++) {
    let thisNum = arr[i]
    numObj[thisNum] = i
  }
  for (let i = 0; i < arr.length; i++) {
    let diff = s - arr[i]
    if (numObj[diff]) {
      pairs.push([i, numObj[diff]])
    }
  }
  console.log(pairs);
}

// let result = twoSum(arr, 7)
// console.log(result);
