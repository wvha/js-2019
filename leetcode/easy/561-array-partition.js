/*
https://leetcode.com/problems/array-partition-i/
sort nums
add every even index
*/

var arrayPairSum = function(nums) {
    nums.sort(function (a, b) {return a-b})
    
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i%2===0) sum+=nums[i]
    }
    return sum;
};

let input = [1,4,3,2]
console.log(arrayPairSum(input)) // 4

