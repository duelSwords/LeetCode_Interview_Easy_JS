// 76. Minimum Window Substring
// Hard

// Given two strings s and t of lengths m and n respectively, return the minimum window 
// substring of s such that every character in t (including duplicates) is included in the window. 
// If there is no such substring, return the empty string "".

// The testcases will be generated such that the answer is unique.

// A substring is a contiguous sequence of characters within the string.

 

// Example 1:

// Input: s = "ADOBECODEBANC", t = "ABC"
// Output: "BANC"
// Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
// Example 2:

// Input: s = "a", t = "a"
// Output: "a"
// Explanation: The entire string s is the minimum window.
// Example 3:

// Input: s = "a", t = "aa"
// Output: ""
// Explanation: Both 'a's from t must be included in the window.
// Since the largest window of s only has one 'a', return empty string.



var minWindow = function(str, targets) {
    //create a hash with the total of each letter.
    //create a hash with 0 letter seen for each letter
    //create a missing letter count. Duplicate letters represent 1 letter
    let dict = {}
    let seen = {}
    let missingLetter = 0
    let range = [0, Infinity]
    
    for(let char of targets){
        if(dict[char]){
            dict[char]++
        }else{
            dict[char] = 1
            seen[char] = 0
            missingLetter ++
        }
    } 
    
    let lIdx = 0
    for(let rIdx = 0; rIdx < str.length; rIdx++){
        //expanding the window
        let letterR = str[rIdx] 
        if(letterR in dict){
            seen[letterR]++
            //once both the dict and seen are the same, we found all the letters, subtract missLetter by 1
            if(dict[letterR] === seen[letterR]) missingLetter--
        }
        
         //shrink the window
        while(missingLetter === 0){
            let letterL = str[lIdx]
            //compare the range to see if its smaller
            if( rIdx - lIdx  < range[1] - range[0]) range = [lIdx, rIdx]
        
            if(letterL in dict){
                seen[letterL]--
                //missLetters are not all found, continue expanding the window
                if(dict[letterL] > seen[letterL]) missingLetter++
            }
            lIdx++
        }
    }
    
  if(range[1] === Infinity) return ""
  return str.slice(range[0], range[1] + 1)
      
}