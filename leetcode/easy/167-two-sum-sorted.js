/* 
brute force way

have index 1
loop through array WHILE value is below the target
next

*/
var twoSum = function(numbers, target) {
    let index1 = 0
    let index2 = 0
    for (let i = 0; i < numbers.length; i++) {
        index1 = i
        for (let j = i+1; j < numbers.length; j++) {
            if (numbers[index1] + numbers[j] === target) {
                index2 = j
                return [index1 + 1, index2 + 1]
            } 
        }
    }
};

