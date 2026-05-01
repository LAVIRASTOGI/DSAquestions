// Given a binary tree, determine if it is height-balanced.

// Example 1:

// Input: root = [3,9,20,null,null,15,7]
// Output: true
// Example 2:

// Input: root = [1,2,2,3,3,null,null,4,4]
// Output: false
// Example 3:

// Input: root = []
// Output: true

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
 * @return {boolean}
 */

// use bottom up approch to calcualte depth
var isBalanced = function (root) {
  let flag = true;
  let calcualteHeight = (curr) => {
    if (!curr) return 0;
    let leftHeight = calcualteHeight(curr?.left);
    let rightHeight = calcualteHeight(curr?.right);

    if (Math.abs(leftHeight - rightHeight) > 1) {
      flag = false;
    }
    return 1 + Math.max(leftHeight, rightHeight);
  };

  calcualteHeight(root);

  return flag;
};
