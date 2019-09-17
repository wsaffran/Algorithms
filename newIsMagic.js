const isMagicSquare = matrix => {

  const length = matrix[0].length
  let base = 0
  for (let i = 0; i < length; i++) {
    base += matrix[0][i]
  }

  let current = 0

  for (let i = 0; i < length; i++) {
    current = 0
    for (let j = 0; j < length; j++) {
      current += matrix[i][j]
    }
    if (current !== base) {
      return 0
    }
  }

  for (let i = 0; i < length; i++) {
    current = 0
    for (let j = 0; j < length; j++) {
      current += matrix[j][i]
    }
    if (current !== base) {
      return 0
    }
  }

  current = 0
  for (let i = 0; i < length; i++) {
    current += matrix[i][i]
  }
  if (current !== base) {
    return 0
  }

  current = 0
  for (let i = 0; i < length; i++) {
    current += matrix[2-i][i]
  }
  if (current !== base) {
    return 0
  }

  // if all pass, return 1
  return 1
}
