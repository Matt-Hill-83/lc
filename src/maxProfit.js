//  12:51 -1:37

export const maxProfit = () => {
  const maxProfit = (prices) => {
    let profit = 0
    let holding = false
    const finalPrice = prices[prices.length - 1]

    prices.forEach((item, index) => {
      if (index === prices.length - 1) return

      const nextPrice = prices[index + 1]
      const price = item

      if (!holding && price < nextPrice) {
        //   buy
        profit -= price
        holding = true
      }

      if (holding && price > nextPrice) {
        //   sell
        profit += price
        holding = false
      }
    })

    if (holding === true) {
      profit += finalPrice
    }

    const test = `
    -iterate thru points
    --if not bought, 
    --- if price goes up, buy on previous day
    -- if bought
    --- if price goes down, sell on prev day
    - if holding at the end, sell

`

    return profit
  }

  // const prices = [1, 2, 3, 4, 5]
  const prices = [7, 6, 4, 3, 1]
  // const prices = [7, 1, 5, 3, 6, 4]
  const output = maxProfit(prices)
  console.log("output", output) // zzz
  return output
}

const test = `
You are given an array prices where prices[i] is the price of a given stock on the ith day.

Find the maximum profit you can achieve. 
You may complete as many transactions as you like (i.e.,
     buy one and sell one share of the stock multiple times).

Note: You may not engage in multiple transactions simultaneously (i.e.,
     you must sell the stock before you buy again).

 

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 7
Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5),
 profit = 5-1 = 4.
Then buy on day 4 (price = 3) and sell on day 5 (price = 6),
 profit = 6-3 = 3.
Example 2:

Input: prices = [1,2,3,4,5]
Output: 4
Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5),
 profit = 5-1 = 4.
Note that you cannot buy on day 1,
 buy on day 2 and sell them later,
 as you are engaging multiple transactions at the same time. 
You must sell before buying again.
Example 3:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case,
 no transaction is done,
 i.e.,
 max profit = 0.
 `
