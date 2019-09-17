function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let sortedArr = A.sort((a,b) => a - b)

    let smallest = sortedArr[0]
    let largest = sortedArr[sortedArr.length - 1]

    console.log(sortedArr);

    if (smallest > 1) {
        console.log(smallest);
    }

    if (largest < 1) {
        console.log(largest);
    }

    for (let i = 0; i < sortedArr.length - 1; i++) {
        if (sortedArr[i + 1] > sortedArr[i] + 1 && sortedArr[i+1] >= 1) {
            console.log(sortedArr[i] + 1);
        }
    }

    console.log(largest + 1)

}

solution([-20, 0, 1, 40])
