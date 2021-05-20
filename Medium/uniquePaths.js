// 62. Unique Paths
// Medium

// A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

// The robot can only move either down or right at any point in time. The robot is trying to reach the 
// bottom-right corner of the grid (marked 'Finish' in the diagram below).

// How many possible unique paths are there?

 

// Example 1:
// Input: m = 3, n = 7
// Output: 28

// Example 2:
// Input: m = 3, n = 2
// Output: 3
// Explanation:
// From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
// 1. Right -> Down -> Down
// 2. Down -> Down -> Right
// 3. Down -> Right -> Down

// Example 3:
// Input: m = 7, n = 3
// Output: 28

// Example 4:
// Input: m = 3, n = 3
// Output: 6


/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */


//    nothing
// [|1|1|1|          [m][n]           [m-1][n]         [m][n-1]
// |1|1|1|   matrix[1][1] = matrix[0][1] + matrix[1][0]   
// |1|1|1|]  [m-1][n-1]

//m=row n=column
var uniquePaths = function(m, n) {
    let matrix = []
    for(let i=0;i<m;i++){
      matrix.push([])
      for(let j=0;j<n;j++){
        matrix[i].push(1)
      }
    }
  for(let i=1;i<m;i++){
    for(let j=1;j<n;j++){
      matrix[i][j] = matrix[i-1][j] + matrix[i][j-1]
    }
  }
  return matrix[m-1][n-1]
};