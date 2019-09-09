const bubbleSort = a => {
  let n = a.length
  let numSwaps = 0

  for (let i = 0; i < n; i++) {

    for (let j = 0; j < n - 1; j++) {
        // Swap adjacent elements if they are in decreasing order
        if (a[j] > a[j + 1]) {
            let b = a[j+1]
            a[j+1] = a[j]
            a[j] = b
            numSwaps += 1
        }
    }

  }
  console.log(`Array is sorted in ${numSwaps} swaps.`)
  console.log(`First Element: ${a[0]}`)
  console.log(`Last Element: ${a.slice(-1)}`)
}

bubbleSort([2,5,6,1,3])
