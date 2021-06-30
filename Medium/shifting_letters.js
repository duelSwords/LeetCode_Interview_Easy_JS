// 848. Shifting Letters
// Medium

// We have a string s of lowercase letters, and an integer array shifts.

// Call the shift of a letter, the next letter in the alphabet, (wrapping around so that 'z' becomes 'a'). 

// For example, shift('a') = 'b', shift('t') = 'u', and shift('z') = 'a'.

// Now for each shifts[i] = x, we want to shift the first i+1 letters of S, x times.

// Return the final string after all such shifts to s are applied.

// Example 1:

// Input: s = "abc", shifts = [3,5,9]
// Output: "rpl"
// Explanation: 
// We start with "abc".
// After shifting the first 1 letters of S by 3, we have "dbc".
// After shifting the first 2 letters of S by 5, we have "igc".
// After shifting the first 3 letters of S by 9, we have "rpl", the answer.



 var shiftingLetters = function(s, shifts) {
    let charCode = []
    for(let x of s){
      charCode.push(x.charCodeAt(0))
    }
    
    for(let i=0; i<shifts.length; i++){
        let ind=i
        let addNum = shifts[i] % 26
        while(ind >= 0){
            charCode[ind] += addNum
            if(charCode[ind] > 122){
                charCode[ind] = charCode[ind] - 122 + 96
            }
            ind--
        }
    }
    
    let result = ""
    charCode.forEach(n => result += String.fromCharCode(n))
    
    return result
};



var shiftingLetters = function(s, shifts) {

    let newShifts = new Array(shifts.length).fill(null);
    
    let currSum = 0;
    for (let i = shifts.length - 1; i >= 0; i--) {
        currSum += shifts[i];
        newShifts[i] = currSum % 26;
    }
    
   
    let sArr = s.split('')
    for (let j = 0; j < s.length; j++) {
        const baseCode = 'a'.charCodeAt(0);
        const id = ((s[j].charCodeAt(0) + newShifts[j] - baseCode) % 26) + baseCode;
        
        sArr[j] = String.fromCharCode(id);
        
    }
    
    return sArr.join('');
};