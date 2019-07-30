// https://leetcode.com/problems/symmetric-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */


/*
plan
use array to hold next values

recursive solution testing on opposite sides

*/



var isSymmetric = function(root) {
  return helper(root, root)
};

const helper = function(p, q) {
  if (p === null && q === null) return true
  if (p === null || q === null) return false

  return p.val === q.val && helper (p.left, q.right) && helper(p.right, q.left)
}


