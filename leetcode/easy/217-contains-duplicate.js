/*
have set
iterate through array
add each item to set
check if it exists in the set
  if not, add to set and continue
  if yes, return true
return false
*/

var containsDuplicate = function(nums) {
    let obj = {}
    for (let i = 0; i < nums.length; i++) {
        if (!obj[nums[i]]) obj[nums[i]] = 1
        else return true
    }
    return false
};

