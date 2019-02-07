/*
https://leetcode.com/problems/majority-element-ii/

*/

var majorityElement = function(nums) {
    let obj = {};
    let answer = new Set()
    
    for (let i = 0; i < nums.length; i++) {

            
        obj[nums[i]] = obj[nums[i]] + 1 || 1;
        
        let flag = Math.floor(nums.length/3)
        
        if (obj[nums[i]] > flag) {
            answer.add(nums[i])

        }
    } return [...answer]
};

