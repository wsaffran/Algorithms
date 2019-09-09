const prices = [1,12,5,111,200,1000,10]
const k = 50

const maximumToys = (prices, k) => {

  // sort prices
  prices.sort((a,b)=>a-b) // if a-b is > 0, return 1. if a-b < 0, return -1. if a-b == 0, return 0

  // count how maximum toys
  let result = 0
  let cost = 0

  for (let i = 0; i < prices.length; i++) {
    if (cost + prices[i] <= k) {
      cost += prices[i]
      result += 1
    }
  }
  console.log(result)
}

maximumToys(prices, k)
