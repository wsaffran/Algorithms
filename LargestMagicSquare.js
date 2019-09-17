function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let height = A.length
    let width = A[0].length

    let maxLength = Math.min(height, width)

    let difference = Math.abs(height - width)
    let possibleNumberOfSquares = difference + 1
    let currentTested = 0

    let bestMatrix, bestMatrixSize

    while (possibleNumberOfSquares > currentTested) {

      let arrayToTest = []

      for (let i = 0; i < maxLength; i++) {
        arrayToTest.push([])
      }

      let currentWidthStart = 0
      let currentHeightStart = 0

      for (let i = currentHeightStart; i < maxLength + currentHeightStart; i++) {
        for (let j = currentWidthStart; j < maxLength - currentWidthStart; j++) {
          arrayToTest[i].push(A[i][j])
        }
      }

      if (isMatrix(arrayToTest)) {
        let size = 0
        for (let i = 0; i < arrayToTest.length; i++) {
          size += arrayToTest[0][i]
        }
        if (size > bestSize) {
          bestMatrix = arrayToTest
          bestSize = size
        }
      }

      if (currentWidthStart < width - maxLength) {
        currentWidthStart++
      } else {
        currentHeightStart++
      }
      currentTested++


    }

}

const isMagicSquare = (matrix) => {

}

solution([[4, 3, 4, 5, 3], [2, 7, 3, 8, 4], [1, 7, 6, 5, 2], [8, 4, 9, 5, 5]])




function newSolution(matrix) {
  let height = A.length
  let width = A[0].length

  let maxLength = Math.min(height, width)

  while (n > 0) {
    ...
    n++
  }
}
