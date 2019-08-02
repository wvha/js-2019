/*
iterate through array
if current i is less than the tallest
count the rest 



var heightChecker = function(heights) {
    let sum = 0
    let tallest = heights[0]
    
    for (let i = 1; i < heights.length; i++) {
        if (heights[i] < tallest) {
            sum++
        } else tallest = heights[i]
    }
    return sum;
};
*/

var heightChecker = function(heights) {
    let count = 0
    let sorted = heights.slice().sort((a,b) => a - b)
    
    heights.forEach((value, index) => {
        if (sorted[index] !== value) count++
    })
    return count
    
}

