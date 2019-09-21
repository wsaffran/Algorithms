function solution(ranks) {
    // write your code in JavaScript (Node.js 8.9.4)
    const sortedRanks = ranks.sort((a,b) => a - b)
    let soldiers = {}
    let result = 0

    for (let i = 0; i < sortedRanks.length; i++) {
        let current = sortedRanks[i]
        if (i == 0 || sortedRanks[i-1] !== sortedRanks[i]) {
          soldiers[current] = 1
        } else {
          soldiers[current] += 1
        }
    }

    let soldierValues = Object.entries(soldiers)
    for (let i = 0; i < soldierValues.length - 1; i++) {
      if (parseInt(soldierValues[i][0]) + 1 === parseInt(soldierValues[i+1][0])) {
        result += soldierValues[i][1]
      }
    }


    // for (key in soldiers) {
    //   numKey = parseInt(key) + 1
    //   console.log(numKey);
    // }

    console.log(result);
}

solution([4, 4, 3, 3, 1, 0])
