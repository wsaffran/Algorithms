const arr = [2,3,4,1,5]

const minimumSwaps = (arr) => {
  // don't mutate original array
  let newArr = [...arr]
  const length = newArr.length
  let totalSwaps = 0

  // base case if newArr is one item or less
  if (length <= 1) {
    return totalSwaps
  }
  // helper function to swap items
  function swap(list, indexOne, indexTwo) {
    let tempNode = list[indexOne]
    list[indexOne] = list[indexTwo]
    list[indexTwo] = tempNode
    totalSwaps += 1
    return list
  }

  for (let i = 0; i < length; i++) {
    console.log("first for: ", i);
    let idToSwap = false
    const correctNumber = i + 1 // first time looking for 1

    for (let j = i + 1; j < length; j++) {
      console.log("second for: ", j);
      if (correctNumber === newArr[j]) { //if we find 1, get the id
        idToSwap = j
        break // breaks out of current LOOP (not conditional)
      }
    }
    console.log("idToSwap",idToSwap);
    if (idToSwap) { // once we get an id
      newArr = swap(newArr, i, idToSwap)
    }

  }
  return totalSwaps
}

let result = minimumSwaps(arr)
console.log(result);
