// sol 1
// while node has children, for each, add its first child

var preorder = function(root) {
	return compose(root, []);
}

function compose(node, list) {
  if (!node) {
		return list;
	}

	list.push(node.val);

	if (node.children) {
		node.children.forEach(child => {
			compose(child, list);
		})
	}

	return list;
}



// two line sol
// reduce ... accumulator, child
var preorder = function(root) {
	if (!root) return [];
	return [root.val, ...root.children.reduce((acc, child) => acc.concat(preorder(child)), [])];
}
