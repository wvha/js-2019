/*
make two sets
use function to check for union?
[...set] ?



*/

var intersection = function(nums1, nums2) {
  let result = []
  let set1 = new Set(nums1)
  let set2 = new Set(nums2)

  set1.forEach(num => {
    if (set2.has(num)) result.push(num)
  })
  return result 
};


