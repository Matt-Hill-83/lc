export const palindrone = () => {
  const palindrone = (str) => {
    const len = str.length

    const test2 = typeof str
    console.log("test2", test2) // zzz
    let isGood = true
    if (typeof str !== "string") {
      console.log("bad") // zzz
      // if (str === NaN) {
      return false
    }

    const numLoops = Math.floor(len / 2)
    for (var i = 1; i <= numLoops; i++) {
      console.log("i", i) // zzz
      const start = i
      const end = len - i - 1
      const match = str[start] === str[end]

      isGood = isGood && match
    }

    return isGood
  }

  //   const str = NaN
  //   const str = "01210"
  //   const str = "aba"
  const str = "amanaplanacanalpanama"
  const result = palindrone(str)
  console.log("result", result) // zzz
  return result
}

const test = `

Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

 

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.

`
