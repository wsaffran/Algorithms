

var convert = function(s, numRows) {

  var t0 = new Date().getTime()

  if (numRows === 1) {
    return s
  }

  let rows = []

  for (let i  = 0; i < Math.min(numRows, s.length); i++) {
    rows.push([])
  }

  let currentRow = 0
  let goingDown = false

  for(c in s) {
    rows[currentRow].push(c)
    if (currentRow === 0 || currentRow === numRows - 1) {
      goingDown = !goingDown
    }
    currentRow += goingDown ? 1 : - 1
  }

  let result = []

  for (row in rows) {
    let index = 0
    let string = ""
    while (index < rows[row].length) {
      string += s.charAt(parseInt(rows[row][index]))
      index++
    }
    result.push(string)
  }

  for (line in result) {
    console.log(result[line]);
  }

  var t1 = new Date().getTime();
  console.log("Execution time: " + (t1 - t0) * 10 + " milliseconds.");

}

convert("PAYPALISHIRINGTHATISAWESOME", 5)
