
// Given a string, find the first non-repeating character in 
// it and return its index. If it doesn't exist, return -1.

// Examples:

// s = "leetcode"
// return 0.

// s = "loveleetcode"
// return 2.
 




// /**
//  * @param {string} s
//  * @return {number}
//  */

const s = "loveleetcode"

var firstUniqChar = function(s) {
    for (let i = 0; i < s.length; i++){
        if(s.indexOf(s[i]) === s.lastIndexOf(s[i])){
            return i
        }
    }
    return -1 
 };

console.log(firstUniqChar(s))





// var firstUniqChar = function(s) {
//     let single = s.split("").filter((v,i,a) => {
//         return a.indexOf(v) === i && a.lastIndexOf(v) === i
//     })
//     return s.indexOf(single[0])
// };