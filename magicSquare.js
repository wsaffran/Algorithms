const matrix = [
  [5,3,4],
  [1,5,8],
  [6,4,2]
]

const isMagicSquare = s => {

  // find first row value for comparison
  const length = s[0].length
  let compare = 0
  for (let i = 0; i < length; i++) {
    compare += s[0][i]
  }

  let temp = 0

  // check if each row sum is same
  for (let i = 0; i < length; i++) {
    temp = 0
    for (let j = 0; j < length; j++) {
      temp += s[i][j]
    }
    if (temp !== compare) {
      return 0
    }
  }

  // check if each column sum is same
  for (let i = 0; i < length; i++) {
    temp = 0
    for (let j = 0; j < length; j++) {
      temp += s[j][i]
    }
    if (temp !== compare) {
      return 0
    }
  }

  //check if each diagonal 1 sum is same
  temp = 0
  for (let i = 0; i < length; i++) {
    temp += s[i][i]
  }
  if (temp !== compare) {
    return 0
  }

  // check if each diagonal 2 sum is same
  temp = 0
  for (let i = 0; i < length; i++) {
    temp += s[2-i][i]
  }
  if (temp !== compare) {
    return 0
  }

  // if all pass, return 1
  return 1
}

const findMagicSquare = s => {
  const magicSquares = []
  const length = s[0].length

  let newMS = []
  for (let i = 0; i < length*3; i++) {
    newMS.push(i+1)
  }

  console.log(newMS);
}

findMagicSquare(matrix)
