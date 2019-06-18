/* 
fizz instead of threes
buzz instead of fives
fizzbuzz instead of fifteens

*/

var fizzBuzz = function(n) {
    let ans = []
    for (let i = 1; i <= n; i++) {
        if (i%15===0) ans.push("FizzBuzz")
        else if (i%3===0) ans.push("Fizz")
        else if (i%5===0) ans.push("Buzz")
        else ans.push(i.toString())
    }
    return ans
};

