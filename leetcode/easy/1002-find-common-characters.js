/* 
https://leetcode.com/problems/find-common-characters/

Input: ["bella","label","roller"]
Output: ["e","l","l"]


*/

var commonChars = function(A) {
  let result = A[0].split('');
  let temp = [];
  for (let i = 1, size = A.length; i < size; i++) {
    for (let j = 0, sizeJ = A[i].length; j<sizeJ; j++) {
      const letter = A[i][j];
      const index = result.indexOf(letter);
      if(index > -1) {
        temp.push(letter);
        result.splice(index, 1);
      }
    }
    result = temp;
    temp = [];
  }
  return result
}


/*
for each word in A
for each letter in A[i]
  if first word contains the letter, 
  push array into temp index
  go to next word
    result is temp,
    temp is empty array ... ?



*/
