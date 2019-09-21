function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)

    let result = []

    if (N % 2 === 0) {
        for (let i = 0; i < N; i++) {
            if (i === 0) {
              result.push(1)
            } else if (i % 2 !== 0) {
              result.push(-result[i-1])
            } else if (i % 2 === 0) {
              result.push(-result[i-1] + 1)
            }
        }
    } else {
      for (let i = 0; i < N; i++) {
          if (i === 0) {
            result.push(0)
          } else if (i % 2 !== 0) {
            result.push(-result[i-1] + 1)
          } else if (i % 2 === 0) {
            result.push(-result[i-1])
          }
      }
    }
    console.log(result);
}

solution(9)
