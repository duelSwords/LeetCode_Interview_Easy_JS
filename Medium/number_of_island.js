// 200. Number of Islands
// Medium

// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), 
// return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent lands horizontally or 
// vertically. You may assume all four edges of the grid are all surrounded by water.

 

// Example 1:
// Input: grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// Output: 1

// Example 2:
// Input: grid = [
//   ["1","1","0","0","0"],
//   ["1","1","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]
// ]
// Output: 3




/**
 * @param {character[][]} grid
 * @return {number}
 */
 var numIslands = function(grid) {
    let count = 0
    for(let row=0; row<grid.length; row++){
        for(let col=0; col<grid[row].length; col++){
            if(grid[row][col] === "1"){
                count++
                visited(grid, row, col) 
            }
        }
    }
    
    return count
};


function visited(grid, row, col){
    //check if grid[row][col] if out of bound or 0, if so return and end the BFS
    if(row<0 || row >= grid.length || col < 0 || col >= grid[row].length || grid[row][col] === "0") return 
    
    //grid[row][col] is 1. Change it to 0. Check for any 1 up,down,left,and right
    //after the BFS ends. Continue the loops for the next col in the row, and so forth till the next 1.  
    grid[row][col] = "0"
    
    //up
    visited(grid, row-1, col) 
    //down
    visited(grid, row+1, col) 
    //left
    visited(grid, row, col-1) 
    //right
    visited(grid, row, col+1) 
}