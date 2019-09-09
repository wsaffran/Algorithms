const d = 5
const expenditure = [2,3,4,2,3,6,8,4,5]

const countingSort = (arr, min, max) => {
  let j = 0,
  len = arr.length,
  count = []

  for (let i = min; i <= max; i++) {
    count[i] = 0
  }

  for (let i = 0; i < len; i++) {
    count[arr[i]] += 1
  }

  for (let i = min; i <= max; i++) {
    while (count[i] > 0) {
      arr[j] = i
      j++
      count[i]--
    }
  }
  return arr
}

const fraudActivityNotice = (expenditure, d) => {
  let notifications = 0

  let relevantExpenditures, sortedExpenditure, median, min, max

  for (let i = d; i < expenditure.length; i++) {
    relevantExpenditures = expenditure.slice(i-d, i)
    max = Math.max(...relevantExpenditures)
    min = Math.min(...relevantExpenditures)
    sortedExpenditure = countingSort(relevantExpenditures, min, max)
    if (sortedExpenditure.length % 2 == 0) {
      median = sortedExpenditure[Math.floor(d/2) - 1] + sortedExpenditure[Math.floor(d/2)] / 2
    } else {
      median = sortedExpenditure[Math.floor(d/2)]
    }

    if (expenditure[i] >= median * 2) {
      notifications++
    }
  }
  console.log(notifications)
}

fraudActivityNotice(expenditure, d)
