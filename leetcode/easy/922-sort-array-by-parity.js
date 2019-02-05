/*
https://leetcode.com/problems/sort-array-by-parity-ii/
given array of non-negative integers, half even half odd
sort array so odd index have odd values, even indices have even values

*/


var sortArrayByParityII = function(A) {
  let odd = A.filter(x => x%2 !== 0)
  let even = A.filter(x => x%2 === 0)
  
  return A.map((x, index) => index%2 === 0 ? even.pop() : odd.pop());
}

