// Given the roots of two binary trees p and q, write a function to check if they are the same or not.

// Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

// Example 1:

// Input: p = [1,2,3], q = [1,2,3]
// Output: true
// Example 2:

// Input: p = [1,2], q = [1,null,2]
// Output: false
// Example 3:

// Input: p = [1,2,1], q = [1,1,2]
// Output: false

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  let tree1 = makeTree(p);
  let tree2 = makeTree(q);
  if (tree1.length !== tree2.length) return false;

  for (let i = 0; i < tree1.length; i++) {
    if (tree1[i] !== tree2[i]) return false;
  }

  return true;
};

function makeTree(root) {
  let queue = [root];
  let ans = [];

  while (queue.length) {
    let curr = queue.shift();
    ans.push(curr?.val ?? "null");
    if (curr?.left && curr?.right) {
      queue.push(curr?.left);
      queue.push(curr?.right);
    } else if (curr?.left) {
      queue.push(curr?.left);
      queue.push("null");
    } else if (curr?.right) {
      queue.push("null");
      queue.push(curr?.right);
    }
  }

  return ans;
}
