const add = x => {
  return function (y) {
    return x + y
  }
}

const add2 = x => y => x + y

function add3(x) {
  let sum = x
  function resultFn(y) {
    sum += y
    return resultFn
  }
  resultFn.valueOf = function() {
    return sum
  }
  return resultFn
}

console.log(add3(2)(3)(4) == 9);

console.log(5 + add3(3)(4));
