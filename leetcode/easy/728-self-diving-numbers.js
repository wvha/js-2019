/* https://leetcode.com/problems/self-dividing-numbers/submissions/ */

var selfDividingNumbers = function(left, right) {
  var result = [];
  for (let i = left; i < right + 1; i++) {
    if (i.toString().split('').every(val => i%Number(val) === 0)) {
      result.push(i);
    }
  }
  return result;
}

