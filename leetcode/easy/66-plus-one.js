var plusOne = function(digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    digits[i]++
    if (digits[i] > 9) {
      digits[i] = 0;
    } else {
      return digits
    }
  }
  digits.unshift(1)
  return digits
 
}


/*
in this problem we have an array with at least one element
we iterate through the array starting at the end
if its a 9, we'll make it 0 and plus 1 to the next element ..
and at the end we'll add the extra 1 if necessary

else, we just return the digits




*/

