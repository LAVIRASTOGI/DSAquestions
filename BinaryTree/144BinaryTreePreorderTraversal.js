// nput: root = [1,null,2,3]

// Output: [1,2,3]

// Explanation:

// Example 2:

// Input: root = [1,2,3,4,5,null,8,null,null,6,7,9]

// Output: [1,2,4,5,6,7,3,8,9]

// Explanation:

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
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  // root-left-right
  let ans = [];

  function traverse(curr) {
    if (curr?.val) return;
    ans.push(curr?.val);
    traverse(curr.left);
    traverse(curr.right);
  }

  traverse(root);
  return ans;
};
