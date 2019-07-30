var generate = function(n) {
  if (n === 0) return []

  let result = []
  for (i = 0; i < n; i++) {
    let current = []
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) current.push(1)
      else {
        current.push(result[i-1][j-1] + result[i-1][j])
      }
    }

    result.push(current)

  }
  return result
}

