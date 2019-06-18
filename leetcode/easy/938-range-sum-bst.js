/*
traverse with depth first search

if we use a stack, while its not empty, 

if the node.val is inside both, add to sum
if node.val is greater than the L, add its left children
if node.val is smaller than the R, add its right children


*/
var rangeSumBST = function(root, L, R) {
    let sum = 0;
    let stack = [];
    stack.push(root);
    while (stack.length > 0) {
        let node = stack.pop();
        if (node !== null) {
            if (L <= node.val && node.val <= R) sum += node.val;
            if (L < node.val) stack.push(node.left);
            if (node.val < R) stack.push(node.right);
        }
    }
    return sum;
};

