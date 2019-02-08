/*
https://leetcode.com/problems/fibonacci-number/


*/

// iterative solution
const fib = N => {
  let arr = [0, 1];
  for (let i = 2; i <=N; i++) {
    arr.push(arr[i-2] + arr[i-1]);
  }

  return arr[N];
}

//DP iterative with memoization
const fib = N => {
  const memo = {}
  for (let i = 0; i <=N; i++) {
    if (i < 2) memo[i] = i;
    else memo[i] = memo[i-2] + memo[i-1];
  }
  return memo[N];
}
// ????? its just in an object instead of array

// recurssive solution. always the worst
const fib => N => {
  return (N < 2) ? N : fib(N-2) + fib(N-1)
}

