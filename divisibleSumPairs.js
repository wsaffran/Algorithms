const divisibleSumPairs = (n, k, arr) => {
  let result = 0

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i < j && (arr[i] + arr[j]) % k === 0) {
        result++
      }
    }
  }
  console.log(result);
}

divisibleSumPairs(6, 3, [1,3,2,6,1,2])
