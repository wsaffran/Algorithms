const height = [0,1,0,2,1,0,1,3,2,1,2,1]
const height2 = [4,2,3]

var trap = function(height) {

  // start at first line

  // if second line is shorter than first line, set this line as the first bookend

    // go through next lines until one is equivalent to the first bookend and add
    // single areas to total

    // once found check if next line is taller or shorter

      // if taller, move on
      // if shorter, mark that line as the new first bookend

  // if second line is taller, move forward

  let total = 0
  let index = 0
  let firstBookend = 0

  while (index < height.length) { // first index may be higest but water doesn't have to go all the way...
    console.log("index", index);
    // console.log("TEST FIND METHOD", height.slice(index + 1));
    // console.log("TEST FIND METHOD 2", !!height.slice(index+1).find(h => h >= height[index]));
    if (height[index] > height[index + 1] && !!height.slice(index+1).find(h => h >= height[index])) {
      // console.log("in first if");
      firstBookend = height[index]
      let secondIndex = 1
      while (firstBookend > height[index + secondIndex]) {
        if (height[index + secondIndex] < firstBookend ) {
          console.log("first and second index", index, index + secondIndex);
          console.log("to add to total", firstBookend - height[index + secondIndex]);
          total += firstBookend - height[index + secondIndex]
          console.log("new total", total)
          secondIndex++
        }
      }
      index = index + secondIndex
    } else if (height[index] <= height[index + 1] || !height.slice(index+1).find(h => h >= height[index])) {
      // console.log("in seconde if");
      index++
    }
  }

  // messes up at indexes 7 and 8 because there is no height greater than that
  // at index 7 so everything after is added
  // How to keep track of the next heightest to compare against it???

  console.log(total);

};

trap(height2)
