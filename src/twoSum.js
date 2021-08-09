// export const twoSum = () => {
//   var twoSum = function (nums, target) {
//     const dict = {}
//     const matches = []

//     nums.forEach((item, i) => {
//       const comp = target - item
//       const foundCompIndex = dict[item]
//       const exists = foundCompIndex !== undefined

//       if (exists) {
//         matches.push([foundCompIndex, i])
//       }
//       dict[comp] = i
//     })
//     return matches
//   }

//   const nums = [2, 7, 2, 8, -4]
//   const target = 4
//   const output = twoSum(nums, target)
//   return output
// }


export const twoSum = () =>{
let my2Sum = function(arr, target){

const testDict = {}
const outputArr = []

arr.forEach((item,i)=> {
  console.log(item);  // zzz

  const compliment = target - item
  const foundMatchIndex = testDict[compliment] 
  console.log('foundMatchIndex', foundMatchIndex); // zzz

  if (foundMatchIndex !== undefined)  {
    outputArr.push([i, foundMatchIndex])
  }
  testDict[item] = i

  
})

console.log('outputArr', outputArr); // zzz
  return outputArr

}

const arr = [2,7,11,35,-2]
const target = 9

const result = my2Sum(arr,target)
  return result
}

const test = `
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]`
