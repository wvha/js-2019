/*
if there's no root or children, return 0 or 1
return the max of adding one for each child

*/
var maxDepth = function(root) {
    if (!root) return 0;
    if (!root.children.length) return 1;

    return Math.max(...root.children.map(child => maxDepth(child))) + 1
};

