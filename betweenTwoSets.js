const a = [2, 4]
const b = [16, 32, 96]

const getTotalX = (a,b) => {
  // range => largest a number to smallest b number
  let result = []
  let index = Math.max(...a)
  let end = Math.min(...b)
  while (index <= end) {
    if (a.filter(n => index % n === 0).length == a.length && b.filter(n => n % index === 0).length == b.length) {
      result.push(index)
    }
    index++
  }
  console.log(result);
}

getTotalX(a, b)
