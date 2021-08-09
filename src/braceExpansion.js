var expand = function (S) {
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
  ]

  for (let i = 0; i < 100; i++) {}

  const convertInputToInstructions = (input) => {
    //   hack to ensure that training chars are collected
    input += "{"
    const output = []
    let inCurlys = false
    let letterCollection = ""

    for (let i = 0; i < input.length; i++) {
      const char = input[i]

      if (char === "{") {
        inCurlys = true
        const instruction = { type: "string", value: letterCollection }
        letterCollection && output.push(instruction)
        letterCollection = ""
      }

      if (char === "}") {
        inCurlys = false
        const instruction = {
          type: "array",
          value: letterCollection.split("").sort(),
        }
        output.push(instruction)
        letterCollection = ""
      }

      if (letters.includes(char)) {
        letterCollection += char
      }
    }

    return output
  }

  const convertedInput = convertInputToInstructions(S)
  const output = [""]

  convertedInput.forEach((instruction, i) => {
    if (instruction.type === "array") {
      const tempOutput = []
      output.forEach((outputItem) => {
        instruction.value.forEach((instructionArrayItem) => {
          const newValue = outputItem + instructionArrayItem
          tempOutput.push(newValue)
        })
      })
      output.length = 0
      output.push(...tempOutput)
    }

    if (instruction.type === "string") {
      const tempOutput = []
      output.forEach((outputItem) => {
        const newValue = (outputItem += instruction.value)
        tempOutput.push(newValue)
      })

      output.length = 0
      output.push(...tempOutput)
    }
  })

  return output
}

//
//

const input = "k{a,b,c,d,e,f,g}"
// const input = "z{a,b}c{d,e}f"
// const input = "{a,b}c{d,e}f"
const result = expand(input)

const test = `
  
  Notes:
  input:
  "{a,b}c{d,e}f"
  
  normalize to instruction array:
  
  output:
  ["acdf","acef","bcdf","bcef"]
  
  - brute force
  -- create output array
  -- parse to data structures
  ---- step thru
  ------ char:letter - 
  ------ char:cOpen - 
  ------ char:cClosed - 
  ------ char:comma - 
  ----
  
  ---- 
  
  A string S represents a list of words.
  
  Each letter in the word has 1 or more options.
  If there is one option, the letter is represented as is.
  If there is more than one option, then curly braces delimit the options.
  For example, "{a,b,c}" represents options ["a", "b", "c"].
  
  For example, "{a,b,c}d{e,f}" represents the list ["ade", "adf", "bde", "bdf", "cde", "cdf"].
  
  
  
  Return
  - all words that can be formed in this manner
  - in lexicographical order.
  
  `
