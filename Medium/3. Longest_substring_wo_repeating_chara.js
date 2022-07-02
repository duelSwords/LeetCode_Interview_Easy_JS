// 3. Longest Substring Without Repeating Characters
// Medium

// Given a string s, find the length of the longest substring without repeating characters.

 

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

 

// Constraints:

//     0 <= s.length <= 5 * 104
//     s consists of English letters, digits, symbols and spaces.

// /**
//  * @param {string} s
//  * @return {number}
//  */

 var lengthOfLongestSubstring = function(s) {
    let curLen
    let hash = {}
    let result = 0
    
    for(let i=0; i<s.length; i++){
        let letter = s[i]
        
        if(!hash[letter]){
            hash[letter] = i
        }else{
            curLen = Object.keys(hash).length
            result = Math.max(result, curLen)
            i = hash[letter]
            hash = {}
        }

        if(i === s.length-1){
            curLen = Object.keys(hash).length
            result = Math.max(result, curLen)
        }
    }
    
    return result
};