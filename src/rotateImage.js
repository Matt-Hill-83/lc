export const rotateImage = () => {
  // 11:03
  var rotate = function (matrix) {
    const output = []
    return output
  }

  const matrix1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]

  const matrix2 = [
    [5, 1, 9, 11],
    [2, 4, 8, 10],
    [13, 3, 6, 7],
    [15, 14, 12, 16],
  ]
  const output = rotate(matrix1)

  return output

  //
  //
}

const test = `

transformation
Q1: [y, -x]
Q2: [,]
Q3: [,]
Q4: [,]

Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [[7,4,1],[8,5,2],[9,6,3]]
Example 2:


Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
Example 3:

Input: matrix = [[1]]
Output: [[1]]
Example 4:

Input: matrix = [[1,2],[3,4]]
Output: [[3,1],[4,2]]
`
