const arr = [1,2,3,4,5,4,3,2,1,3,4]

const migratoryBirds = arr => {
  arr.sort((a,b) => b - a)

  let currentType = arr[0]
  let currentCount = 0
  let bestType = arr[0]
  let bestCount = 0

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === currentType) {
      currentCount++
    } else {
      if (currentCount >= bestCount) {
        bestType = currentType
        bestCount = currentCount
      }
      currentType = arr[i]
      currentCount = 1
    }
  }
  console.log(bestType, bestCount);
}

migratoryBirds(arr)
