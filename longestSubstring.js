const string = "abcabcabcc"

// with repeating characters, just not in a row
const longsetSubstring1 = string => {
  let currentTest = ""
  let currentBest = ""
  for (let i = 0; i < string.length; i++) {
    let currentTest = string.charAt(i)
    for (let j = i + 1; j < string.length; j++) {
      if (currentTest.charAt(currentTest.length - 1) != string.charAt(j)) {
        currentTest += string.charAt(j)
      }
      if (currentTest.length > currentBest.length) {
        currentBest = currentTest
      }
    }
  }
  console.log(currentBest);
}

// without repeating characters
const longsetSubstring2 = string => {
  let currentTest = ""
  let currentBest = ""
  for (let i = 0; i < string.length; i++) {
    let currentTest = string.charAt(i)
    for (let j = i + 1; j < string.length; j++) {
      if (!currentTest.includes(string.charAt(j))) {
        currentTest += string.charAt(j)
        if (currentTest.length > currentBest.length) {
          currentBest = currentTest
        }
      } else {
        currentTest = ""
      }

    }
  }
  console.log(currentBest);
}

longsetSubstring2(string)
