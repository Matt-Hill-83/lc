export const threeSum = () => {
  //
  //
  //
  const threeSum = (nums) => {
    const twoSum = function (nums, target) {
      const dict = {}
      const matches = []

      nums.forEach((item, i) => {
        const comp = target - item
        const foundCompIndex = dict[item]
        const exists = foundCompIndex !== undefined

        if (exists) {
          matches.push([nums[foundCompIndex], nums[i]])
        }
        dict[comp] = i
      })
      return matches
    }

    const output = []
    nums.forEach((num, i) => {
      const temp = [...nums]
      temp.splice(i, 1)

      const twoSumOutput = twoSum(temp, -num)
      twoSumOutput.forEach((item) => {
        output.push([...item, num].sort())
      })
    })

    const newDict = {}
    output.forEach((item) => {
      const str = JSON.stringify(item)
      newDict[str] = item
    })
    return Object.values(newDict)
  }

  const nums = [-1, 0, 1, 2, -1, -4]
  const output = threeSum(nums)
  return output
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
