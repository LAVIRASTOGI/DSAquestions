// **
//  * Definition for a binary tree node.
//  * function TreeNode(val, left, right) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.left = (left===undefined ? null : left)
//  *     this.right = (right===undefined ? null : right)
//  * }
//  */
// /**
//  * @param {TreeNode} root
//  * @param {number} targetSum
//  * @return {boolean}
//  */
// var hasPathSum = function(root, targetSum) {

// };

// **
//  * Definition for a binary tree node.
//  * function TreeNode(val, left, right) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.left = (left===undefined ? null : left)
//  *     this.right = (right===undefined ? null : right)
//  * }
//  */
// /**
//  * @param {TreeNode} root
//  * @param {number} targetSum
//  * @return {boolean}
//  */
var hasPathSum = function (root, targetSum) {
  if (!root) return false;

  let flag = false;

  function traverse(curr, sum) {
    if (!curr) return;

    sum = sum + curr.val;

    // check only at leaf node
    if (!curr.left && !curr.right) {
      if (sum === targetSum) {
        flag = true;
      }
      return;
    }

    traverse(curr.left, sum);
    traverse(curr.right, sum);
  }

  traverse(root, 0);
  return flag;
};
