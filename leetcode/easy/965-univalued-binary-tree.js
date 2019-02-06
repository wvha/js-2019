/*
https://leetcode.com/problems/univalued-binary-tree/
a binary tree is univalued if every node in tree has same value

must check every node once
depends on which method you want to traverse the tree? 

*/


// BFS solution
var isUnivalTree = function(root) {
  if (root === null) return true;
  
  let val = root.val;
  let q = [];
  q.push(root);

  while (q.length !== 0) {
    let temp = q.shift();
    
    if (temp.val !== val) return false;
    if (temp.left) q.push(temp.left);
    if (temp.right) q.push(temp.right);
  }
  return true;
}


// recursive solution
// similar to checking the tree if its a correct binary tree
var isUnivalTree = function(root) {
  if (!root) return true;
  if (root && root.left && root.val !== root.left.val) return false;
  if (root && root.right && root.val !== root.right.val) return false;
  return isUnivalTree(root.left) && isUnivalTree(root.right);
}

