// 4:39 - 5:10

const twoSum = ({ otherNums, target }) => {
  const output = []
  const dict = {}

  otherNums.forEach((num, index) => {
    dict[num] = { index: index }
  })

  otherNums.forEach((num, index) => {
    const solution = target - num
    if (dict[solution] && dict[solution]["index"] !== index) {
      console.log("dict[solution][index]", dict[solution]["index"]) // zzz
      output.push([num, solution])
    }
    // dict[num] = num
  })

  return output
}

export const threeSum = () => {
  const threeSum = (nums) => {
    // for each num
    // calc target
    // run 2sum on target -- returns array
    // sort array - store it with Json key
    //  Object.values

    const semiFinal = []
    const final = {}
    nums.forEach((num, i) => {
      const otherNums = [...nums]
      otherNums.splice(i, 1)

      const matches = twoSum({ otherNums: otherNums, target: -num })
      console.log("matches", matches) // zzz
      matches.forEach((tuple) => {
        const triple = [...tuple, num]
        triple.sort()
        semiFinal.push(triple)
        final[JSON.stringify(triple)] = triple
      })
    })
    console.log("semiFinal.length", semiFinal.length) // zzz
    console.log("final", final) // zzz
    return Object.values(final)
  }

  const nums = [-1, 0, 1, 2, -1, -4]
  const final = threeSum(nums)
  console.log("final", final) // zzz
  return final
}

const test = `
Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? 
Find all unique triplets in the array which gives the sum of zero.

Notice that the solution set must not contain duplicate triplets.

 

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Example 2:

Input: nums = []
Output: []
Example 3:

Input: nums = [0]
Output: []
`
