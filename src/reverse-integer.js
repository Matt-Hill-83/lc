export const reverseInteger = () => {
  //
  //
  //
  var reverse = function (x) {
    const temp = x.toString()
    return temp.split("").reverse().join("")
  }

  const nums = [-1, 0, 1, 2, -1, -4]
  const x = -120
  const output = reverse(x)
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
