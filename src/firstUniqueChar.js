export const firstUniqueChar = () => {
  //
  //   2:09 - 2:19

  const firstUniqueChar = (str) => {
    let output = -1
    const dict = {}

    for (let i = 0; i <= str.length; i++) {
      const char = str[i]
      if (dict[char]) {
        dict[char] = dict[char] + 1
      } else {
        dict[char] = 1
      }

      console.log("char", char) // zzz
    }

    for (let i = 0; i <= str.length; i++) {
      const char = str[i]
      if (dict[char] === 1) {
        output = i
        break
      }

      console.log("char", char) // zzz
    }

    console.log("output", output) // zzz
    return output
  }

  // const str = "leetcode"
  const str = "loveleetcode"

  const final = firstUniqueChar(str)
  console.log("final", final) // zzz
  return final
}

const test = `
Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode"
return 2.
`
