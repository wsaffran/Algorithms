const pascalsTriangle = numRows => {
  // initialize triangle
  let triangle = []

  // populate first row
  triangle.push([1])
  console.log("1")

  // for rows 2 to 25
  for (let rowNum = 1; rowNum < numRows; rowNum++) {
    let row = []
    let prevRow = triangle[rowNum - 1]

    // first row element is always 1
    row.push(1)

    // middle elements
    for (let j = 1; j < rowNum; j++) {
      // each element is the sum of the numbers above & above and to the left
      row.push(prevRow[j-1] + prevRow[j])
    }

    // last element is always 1
    row.push(1)

    // push row into triangle
    triangle.push(row)
    console.log(row.join(" "))
  }
}

// pascalsTriangle(7)


const foo1 = () => {
  return {bar: "hello"}
}

foo1()















const pascalsTriangle2 = numRows => {
  // initialize triangle
  let triangle = []

  // populate first row
  triangle.push([1])

  // for rows 2 to 25
  for (let rowNum = 1; rowNum < numRows; rowNum++) {
    let row = []
    let prevRow = triangle[rowNum - 1]

    // first row element is always 1
    row.push(1)

    // middle elements
    for (let j = 1; j < rowNum; j++) {
      // each element is the sum of the numbers above & above and to the left
      row.push(prevRow[j-1] + prevRow[j])
    }

    // last element is always 1
    row.push(1)

    // push row into triangle
    triangle.push(row)
  }
  console.log(triangle.toString())
}
