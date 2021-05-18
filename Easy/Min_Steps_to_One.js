// Min number of steps to reach 1
//divide by 3
//divide by 2
//subtract 1


// Memoization
// Recursion - stack

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

function minStepsTab(n){
    let result= new Array(n+1)
    result[1] = 0
    for(let i=2; i<result.length; i++){
        let steps = result[i-1]
        // console.log("i",i, "steps", steps)
    
        if(i%3 === 0){
            let divide3 = result[i/3]
            // console.log("d3", divide3)
            steps = Math.min(steps, divide3)
        }
    
        if(i%2 === 0){
            let divide2 = result[i/2]
            // console.log("d2",divide2)
            steps = Math.min(steps, divide2)
        }

        // console.log("updateSteps", steps)
        result[i] = steps + 1
    }
    return result[n]
}