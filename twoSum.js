let array = [2, 7, 11, 15]

const twoSum = (array, target) => {
  let answer = []
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        answer.push(i, j)
      }
    }
  }
  console.log(answer)
}

twoSum(array, 9)
