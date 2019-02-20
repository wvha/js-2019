var levelOrder = function(root) {
	var rst = [];
	levelOrderHelper(root, 0, rst);
	return rst;
}	


var levelOrderHelper = function(root, level, rst) {
	if (root === null) return;

	if (rst.length <= level) {
		rst.push([]);
	}

	rst[level].push(root.val);
	for (var idx in root.children) {
		levelOrderHelper(root.children[idex], level + 1, rst)
  }
}
