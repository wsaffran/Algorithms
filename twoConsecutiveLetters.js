// function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
    // let solution = S
    // let count = 1
    // let oldLetter = S.charAt(0)
    // let newLetter
    // for (let i = 1; i < S.length; i++) {
    //   newLetter = solution.charAt(i)
    //   oldLetter = solution.charAt(i-1)
    //   if (newLetter === oldLetter) {
    //     count++
    //   }
    //   if (count >= 3) {
    //     let firstPart = solution.substring(0, i)
    //     let secondPart = solution.substring(i + 1, solution.length)
    //     solution = firstPart + secondPart
    //     count = 0
    //   }
    // }
    // console.log(solution);

    // let count = 1
    // let solution = S
    // let test = [0]
    // let index = 0
    //
    // for (let i = 0; i < solution.length - 1; i++) {
    //   if (solution.charAt(i+1) === solution.charAt(i)) {
    //     test.push(index)
    //   } else {
    //     index++
    //     test.push(index)
    //   }
    // }
    //
    // for (let i = 0; i < test.length; i++) {
    //   if ()
    // }
    //
    // console.log(test);
// }

function solution(S) {
  let solution = S.split("")
  let count = 1
  let checkedLetter = solution[0]

  for (let i = 1; i < solution.length; i++) {
    if (solution[i] === checkedLetter) {
      count++
    }
    if (solution[i] !== checkedLetter) {
      checkedLetter = solution[i]
      count = 1
    }
    if (count >= 3) {
      solution.splice(i, 1)
      i--
    }
  }
  console.log(solution);
}


solution('uuuuxaaaaxuuu')
solution('eedaaad')
