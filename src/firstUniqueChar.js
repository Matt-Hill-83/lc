export const firstUniqueChar = () => {
  //
  //   2:37 - 2:46
  const firstUniqChar = function (s) {
    const dict = {}

    const length = s.length
    let output = -1

    for (let i = 0; i < length; i++) {
      const char = s[i]
      if (dict[char]) {
        dict[char] += 1
      } else {
        dict[char] = 1
      }
    }

    for (let i = 0; i < length; i++) {
      const char = s[i]
      const found = dict[char]
      if (found && found === 1) {
        output = i
        break
      }
    }

    return output
  }

  const input = "loveleetcode"
  const output = firstUniqChar(input)
  return output
}

const test = `
Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode"
return 2.
`
