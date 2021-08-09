export const sudoku = () => {
  const isValidSudoku = function (board) {
    const findDupsInRow = (ary) => {
      let isValid = true
      const dict = {}
      const test1 = ary.every((item, i) => {
        if (dict[item]) {
          isValid = false
          return false
        }
        if (item !== ".") {
          dict[item] = true
        }
        return true
      })

      console.log("test1", test1) // zzz

      return isValid
    }

    const testRows = (board) => {
      return board.every((row) => findDupsInRow(row))
    }

    const createSubGridStartLocations = (board) => {
      const subGridLength = 3
      const subGridStartLocations = []
      for (let rowNum = 0; rowNum < board.length; rowNum += subGridLength) {
        for (let colNum = 0; colNum < board.length; colNum += subGridLength) {
          subGridStartLocations.push([rowNum, colNum])
        }
      }

      return subGridStartLocations
    }

    const getFlatSubGrid = (board, startCoords) => {
      const subGridLength = 3
      const output = []

      for (let rowInc = 0; rowInc < subGridLength; rowInc += 1) {
        const row = startCoords[0] + rowInc
        for (let colInc = 0; colInc < subGridLength; colInc += 1) {
          const col = startCoords[1] + colInc

          const value = board[row][col]
          if (value !== ".") {
            output.push(value)
          }
        }
      }
      return output
    }

    const testSubGrids = (board) => {
      let isValid = true
      const subGridStartLocations = createSubGridStartLocations(board)
      subGridStartLocations.forEach((startCoords) => {
        const flatGrid = getFlatSubGrid(board, startCoords)
        const subGridValid = findDupsInRow(flatGrid)
        isValid = isValid && subGridValid
      })
      return isValid
    }

    const transposeArray = (board) =>
      board[0].map((item, i) => board.map((oldRow) => oldRow[i]))

    let isValid = true
    const transposedBoard = transposeArray(board)

    return (
      isValid &&
      testRows(board) &&
      testRows(transposedBoard) &&
      testSubGrids(board)
    )
  }

  const board = [
    // ["5", "3", ".", ".", "7", ".", ".", ".", "7"],
    // ["9", "3", ".", ".", "7", ".", ".", ".", "."],
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ]

  const output = isValidSudoku(board)
  console.log("output", output) // zzz

  return output
}

const test = `
  Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated 
  according to the following rules:

  Each row must contain the digits 1-9 without repetition.
  Each column must contain the digits 1-9 without repetition.
  Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
  Note:
  
  A Sudoku board (partially filled) could be valid but is not necessarily solvable.
  Only the filled cells need to be validated according to the mentioned rules.
   
  
  Example 1:
  
  
  Input: board = 
  [["5","3",".",".","7",".",".",".","."]
  ,["6",".",".","1","9","5",".",".","."]
  ,[".","9","8",".",".",".",".","6","."]
  ,["8",".",".",".","6",".",".",".","3"]
  ,["4",".",".","8",".","3",".",".","1"]
  ,["7",".",".",".","2",".",".",".","6"]
  ,[".","6",".",".",".",".","2","8","."]
  ,[".",".",".","4","1","9",".",".","5"]
  ,[".",".",".",".","8",".",".","7","9"]]
  Output: true
    `
