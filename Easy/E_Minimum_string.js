// Minimum String
// You are given two strings s and t of equal length only consisting of lowercase 
// letters. Assuming that you can first rearrange s into any order, return the 
// minimum number of changes needed to turn s into t.

// Constraints

// 0 ≤ n ≤ 100,000 where n is the length of s and t
// Example 1

// Input
// s = "ehyoe"
// t = "hello"

// Output
// 2

// Explanation
// We can shuffle "ehyoe" to be "heyeo" and then turn "y" and the 2nd "e" into "l".



// class Solution {
//     solve(s, t) {
//         let count = 0
//         for(let el of t){
//             if(s.includes(el)){
//                 s = s.replace(el, "")
//             }else{
//                 count++
//             }
//         }
//         return count
//     }
// }

class Solution {
    solve(s, t) {
        let freq = {}
        let count = 0
        for(let el of s){
            if(freq[el]) freq[el]++
            else freq[el] = 1
        }

        for(let el of t){
            if(freq[el]) freq[el]--
            else count++
        }

        return count
    }
}