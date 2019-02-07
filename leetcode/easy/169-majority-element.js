/*
https://leetcode.com/problems/majority-element/
given array, find majority element, which appears more than n/2 times

the first answer simply sorts and finds the *median*,
which is proof enough that its the most populous

the second answer cycles through the array and counts in object
 until a number has reached nums.length/2
*/

var majorityElement = function(nums) {
  nums.sort((a, b) => a - b);

  return nums[Math.floor(nums.length/2)]
}

var majorityElement = function(nums) {
  let obj = {}

  for (let i = 0; i < nums.length; i++) {
    obj[nums[i]] = obj[nums[i]] + 1 || 1;
    if (obj[nums[i]] > nums.length / 2) return nums[i]
  }
}

