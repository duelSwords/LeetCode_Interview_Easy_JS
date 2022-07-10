// 242. Valid Anagram
// Easy

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:

// Input: s = "rat", t = "car"
// Output: false

 

// Constraints:

//     1 <= s.length, t.length <= 5 * 104
//     s and t consist of lowercase English letters.



var isAnagram = function(s, t) {
    let hashmap = {}
    
    if(s.length !== t.length) return false
    
    for(let i=0; i<s.length; i++){
        let char = s[i]
        hashmap[char] = (hashmap[char] || 0) + 1
    }
    
    for(let j=0; j<t.length; j++){
        let char = t[j]
        if(hashmap[char]){
            hashmap[char]--
        }else{
            return false
        }
    }
    
    return true
};