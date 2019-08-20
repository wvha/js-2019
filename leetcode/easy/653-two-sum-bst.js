var findTarget = function(root, k) {
  let queue = [root]
  let set = new Set()

  while (queue.length) {
    let current = queue.pop()
    if (set.contains(k - current.value))
      return true;
    seen.add(current.value)

  // pre-order tree traversal
  if (current.left) queue.push(current.left)
  if (current.right) queue.push(current.right)

  } 

  return false 

  
};
