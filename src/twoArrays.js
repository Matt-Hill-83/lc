// 9:20 - 9:46
export const twoArrays = () => {
  //
  const intersect = (nums1, nums2) => {
    const dict1 = {}
    const dict2 = {}
    const output = []

    const addToDict = (arr, dict) => {
      arr.forEach((item) => {
        if (dict[item] !== undefined) {
          dict[item] = dict[item] + 1
        } else {
          dict[item] = 1
        }
      })
    }

    addToDict(nums1, dict1)
    addToDict(nums2, dict2)

    console.log("dict1", dict1) // zzz
    console.log("dict2", dict2) // zzz

    Object.keys(dict1).forEach((item) => {
      if (dict1[item] !== undefined && dict2[item] !== undefined) {
        const total = Math.min(dict1[item], dict2[item])
        for (let i = 0; i < total; i++) {
          output.push(parseInt(item))
        }
        // prevent number from being used again
        dict1[item] = undefined
        dict2[item] = undefined
      }
    })

    return output
  }

  const nums1 = [4, 9, 5]
  const nums2 = [9, 4, 9, 8, 4]

  //   const arr1 = [1, 2, 2, 1]
  //   const arr2 = [2, 2]

  const output = intersect(nums1, nums2)
  console.log("output", output) // zzz
  return output
}

const test = `Given two integer arrays nums1 and nums2,
 return an array of their intersection.
  Each element in the result must appear as many times
   as it shows in both arrays and you may return the result in any order.

 

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
Explanation: [9,4] is also accepted.
`
