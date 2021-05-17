// Min number of steps to reach 1
//divide by 3
//divide by 2
//subtract 1


// Memoization
// Recursion 

function minSteps(n){
    let cache = {}

    let tranverse(current){
        //check the cache, to see if it exist
        if(current in cache){
            return cache[current]
        }

        if(current === 1) return 0
    
        //subtract 1
        let steps = minSteps(current-1)
    
        //divide 3
        if(current%3 === 0){
            let divide3 = minSteps(current/3)
            steps = Math.min(steps, divide3)
        }
    
         //divide 2
         if(current%2 === 0){
            let divide2 = minSteps(current/2)
            steps = Math.min(steps, divide2)
        }
    
        //write the current key into the cache
        cache[current] = steps + 1
        return steps + 1
    }

    return tranverse(n)
}





// Tabulation 