let array = [
  [1,2,3,4,5],
  [6,7,8,9,10],
  [11,12,13,14,15],
  [16,17,18,19,20]
]

let array2 = [
  [1,2,3,4,5,6],
  [7,8,9,10,11,12],
  [13,14,15,16,17,18],
  [19,20,21,22,23,24],
  [25,26,27,28,29,30],
  [31,32,33,34,35,36]
]

const spiralArray = array => {
  let result = []
  let resultLength = array.length * array[0].length

  let loweri = 0
  let upperi = array.length - 1
  let lowerj = 0
  let upperj = array[0].length - 1

  let i = 0
  let j = 0

  while (result.length < resultLength) {
    if (i === loweri && j === lowerj) {
      while (j <= upperj) {
        result.push(array[i][j])
        j = j + 1
      }
      loweri = loweri + 1
      i = i + 1
      j = j - 1
    }
    if (i === loweri && j === upperj) {
      while (i <= upperi) {
        result.push(array[i][j])
        i = i + 1
      }
      upperj = upperj - 1
      j = j - 1
      i = i - 1
    }
    if (i === upperi && j === upperj) {
      while (j >= lowerj) {
        result.push(array[i][j])
        j = j - 1
      }
      upperi = upperi - 1
      i = i - 1
      j = j + 1
    }
    if (i === upperi && j === lowerj) {
      while (i >= loweri) {
        result.push(array[i][j])
        i = i - 1
      }
      lowerj = lowerj + 1
      j = j + 1
      i = i + 1
    }

  }
  console.log(result)
}

spiralArray(array)
