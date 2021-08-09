// 10:36 -

export const coinChange = () => {
  const coinChange = (coins, amount) => {
    let newAmount = amount
    let totalCoins = 0

    const clonedCoins = [...coins]
    clonedCoins.sort().reverse()

    clonedCoins.forEach((coin) => {
      if (newAmount > 0) {
        const numCoins = Math.floor(newAmount / coin)
        let remainder = 0
        if (numCoins > 0) {
          remainder = newAmount % coin
          newAmount = remainder
        }

        totalCoins += numCoins
      }
    })
    console.log("totalCoins", totalCoins) // zzz

    if (newAmount !== 0) {
      return -1
    }
    return totalCoins
  }

  //   const coins = [2]
  //   const amount = 3

  //   const coins = [1]
  //   const amount = 0

  //   const coins = [1]
  //   const amount = 1

  const coins = [1]
  const amount = 2

  //   const coins = [1, 2, 5]
  //   const amount = 11

  const output = coinChange(coins, amount)

  console.log("output", output) // zzz
  return output
}

const test = `You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

You may assume that you have an infinite number of each kind of coin.

 

Example 1:

Input: coins = [1,2,5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1
Example 2:

Input: coins = [2], amount = 3
Output: -1
Example 3:

Input: coins = [1], amount = 0
Output: 0
Example 4:

Input: coins = [1], amount = 1
Output: 1
Example 5:

Input: coins = [1], amount = 2
Output: 2
 

Constraints:

1 <= coins.length <= 12
1 <= coins[i] <= 231 - 1
0 <= amount <= 104

`
