const lengthOfLongestSubstring = function(s) {
    const n = s.length
    let ans = 0
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j <= n; j++) {
            if (allUnique(s,i,j)) {
                ans = Math.max(ans, j - i)
            }
        }
    }
    return ans
};

const allUnique = function(s, start, end) {
    let set = []
    for (let i = start; i < end; i++) {
        let ch = s.charAt(i)
        console.log(start, end, set, ch);
        if (set.includes(ch)) {
            return false
        }
        set.push(ch)
    }
    return true
}

let answer = lengthOfLongestSubstring("abcabcdabbc")
console.log(answer);










// // with repeating characters, just not in a row
// const longsetSubstring1 = string => {
//   let currentTest = ""
//   let currentBest = ""
//   for (let i = 0; i < string.length; i++) {
//     let currentTest = string.charAt(i)
//     for (let j = i + 1; j < string.length; j++) {
//       if (currentTest.charAt(currentTest.length - 1) != string.charAt(j)) {
//         currentTest += string.charAt(j)
//       }
//       if (currentTest.length > currentBest.length) {
//         currentBest = currentTest
//       }
//     }
//   }
//   console.log(currentBest);
// }
//
// // without repeating characters
// const longsetSubstring2 = string => {
//   let currentTest = ""
//   let currentBest = ""
//
//   if (string.length === 1) {
//     currentBest = string
//   }
//
//   for (let i = 0; i < string.length; i++) {
//     currentTest = string.charAt(i)
//     for (let j = i + 1; j < string.length; j++) {
//       if (!currentTest.includes(string.charAt(j))) {
//         currentTest += string.charAt(j)
//         if (currentTest.length > currentBest.length) {
//           currentBest = currentTest
//         }
//       } else {
//         currentTest = ""
//       }
//
//     }
//   }
//   console.log(currentBest, currentBest.length);
// }
//
// longsetSubstring2(string)
