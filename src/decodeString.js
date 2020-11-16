export const decodeStringTop = () => {
  //
  //
  //
  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
  const letters = ["a", "b", "c", "d", "e", "-", "?"]
  const bOpen = "["
  const bClosed = "]"

  const processLoopNum = (str) => {
    let output = parseInt(str)
    return output
  }

  const findEndingBracketIndex = (str, endBracketSearchStartIdx) => {
    console.log("findEndingBracketIndex **********", str) // zzz
    console.log("str.slice", str.slice(endBracketSearchStartIdx)) // zzz
    let index = -1
    let openBracketCount = 1

    for (let i = endBracketSearchStartIdx; i < str.length; i++) {
      // if abort
      const char = str[i]
      console.log("char", char) // zzz
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

  const recursiveSearch = (str) => {
    let output = ""
    console.log("") // zzz
    console.log("start") // zzz
    console.log("str", str) // zzz

    let loopedContent = ""
    let accumulatedLoopNum = ""
    let loopNum = -1

    for (let i = 0; i < str.length; i++) {
      const char = str[i]
      console.log("i", i) // zzz
      console.log("char", char) // zzz
      if (letters.includes(char)) {
        output += char
      } else if (numbers.includes(char)) {
        accumulatedLoopNum += char
      } else if (char === bOpen) {
        console.log("bOpen++++++++++++++++++") // zzz
        loopNum = processLoopNum(accumulatedLoopNum)

        const endingBracketIndex = findEndingBracketIndex(str, i)
        console.log("endingBracketIndex", endingBracketIndex) // zzz
        const subStrBefore = str.slice(i + 1, endingBracketIndex)
        i += subStrBefore.length
        console.log("subStrBefore=================>>>>>", subStrBefore) // zzz
        accumulatedLoopNum = ""

        loopedContent = recursiveSearch(subStrBefore)
        console.log("+++++++++++>>>loopedContent-------------", loopedContent) // zzz
      } else if (char === bClosed) {
        console.log("bClosed-------------------") // zzz
        console.log("loopNum", loopNum) // zzz
        console.log("loopedContent", loopedContent) // zzz
        for (let j = 0; j < loopNum; j++) {
          console.log("j", j) // zzz
          output = output + loopedContent
          console.log("output----------------->>>", output) // zzz
        }
      }
    }

    return output
  }

  const decodeString = function (str) {
    let output = ""

    output += recursiveSearch(str)
    console.log("output", output) // zzz

    return output
  }

  // const s = "3[a]"
  // const s = "2[aa-]2[bb-]5[cc-]"
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
