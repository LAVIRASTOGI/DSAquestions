/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[9,20],[15,7]]
// Example 2:

// Input: root = [1]
// Output: [[1]]
// Example 3:

// Input: root = []
// Output: []
// for basic level order is fine but we neeed to group array
var levelOrder = function (root) {
  if (!root) return [];
  let ans = [];
  let queue = [root];

  while (queue?.length) {
    let levelArr = [];
    let levelSize = queue.length;
    for (let i = 0; i < levelSize; i++) {
      let curr = queue.shift();
      curr?.left && queue.push(curr?.left);
      curr?.right && queue.push(curr?.right);
      levelArr.push(curr?.val);
    }
    ans.push(levelArr);
  }
  return ans;
};

// recursive soln

var levelOrder = function (root) {
  if (!root) return [];
  let ans = [];
  function traverse(curr, level) {
    if (!curr) return;
    if (ans[level]) {
      ans[level].push(curr?.val);
    } else {
      ans[level] = [curr?.val];
    }
    traverse(curr?.left, level + 1);
    traverse(curr?.right);
  }
  traverse(root, 0);
  return ans;
};
