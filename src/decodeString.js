export const decodeStringTop = () => {
  //
  const decodeString = function (str) {
    const recursiveSearch = (str) => {
      const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
      const letters = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
        "-",
        "?",
      ]

      const findEndingBracketIndex = (str, endBracketSearchStartIdx) => {
        let index = -1
        let openBracketCount = 1

        for (let i = endBracketSearchStartIdx; i < str.length; i++) {
          const char = str[i]
          if (char === "[") openBracketCount++
          if (char === "]") {
            openBracketCount--
            if (openBracketCount === 1) {
              index = i
              break
            }
          }
        }
        return index
      }

      let output = ""
      let loopedContent = ""
      let accumulatedTimesToRepeat = ""
      let timesToRepeat = null

      for (let i = 0; i < str.length; i++) {
        const char = str[i]
        if (letters.includes(char.toLowerCase())) {
          output += char
        } else if (numbers.includes(char)) {
          accumulatedTimesToRepeat += char
        } else if (char === "[") {
          timesToRepeat = parseInt(accumulatedTimesToRepeat)
          const endingBracketIndex = findEndingBracketIndex(str, i)
          const subStrInBrackets = str.slice(i + 1, endingBracketIndex)
          // skip the parsing past the subsection sent to the processor
          i += subStrInBrackets.length

          // reset this
          accumulatedTimesToRepeat = ""

          // Save the looped content so that you can use it when you find the end bracket
          loopedContent = recursiveSearch(subStrInBrackets)
        } else if (char === "]") {
          for (let j = 0; j < timesToRepeat; j++) {
            output = output + loopedContent
          }
        }
      }

      return output
    }

    const output = recursiveSearch(str)
    return output
  }

  const s = "3[a2[-]]"
  const output = decodeString(s)

  return output
}

const test = `
Example 1:

Input: s = "3[a]2[bc]"
Output: "aaabcbc"
Example 2:

Input: s = "3[a2[c]]"
Output: "accaccacc"
Example 3:

Input: s = "2[abc]3[cd]ef"
Output: "abcabccdcdcdef"
Example 4:

Input: s = "abc3[cd]xyz"
Output: "abccdcdcdxyz"
`
