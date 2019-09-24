const height = [1,8,6,2,5,4,8,3,7]

var maxArea = function(height) {

  var t0 = new Date().getTime()

  const numOfLines = height.length
  let current = 0
  let max = 0

  for (let i = 0; i < numOfLines; i++) {
    for (let j = i; j < numOfLines; j++) {
      current = (j-i) * Math.min(height[i], height[j])
      if (current > max) {
        max = current
      }
      current = 0
    }
  }

  var t1 = new Date().getTime();

  console.log(max);

  console.log("Execution time: " + (t1 - t0) + " milliseconds.");


};

maxArea(height)
