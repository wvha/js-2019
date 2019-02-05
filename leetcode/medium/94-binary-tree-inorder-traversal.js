/*
given a binary tree, return the inorder traversal of its nodes' values
remember, inorder traversal is going from least to greatest values
*/


// recursive
var inorderTraversal = function(root) {
  if (root === null) {
    return [];
  } else {
    return [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)];
  }
}

// iterative with stack method
var inorderTraversal = function(root) {
 let traversed = []; 

 if (root === null) {
    return traversed;
  } else {
    const nodes = [root]
    let current = root.left;

    while (current !== null || nodes.length) {
      while (current !== null) {
        nodes.push(current)
        current = current.left;
      }
      current = nodes.pop();
      traversed.push(current.val);
      current = current.right;
  }
  return traversed;
}

