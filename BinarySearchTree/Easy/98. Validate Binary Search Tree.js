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
var isValidBST = function (root) {
  let flag = true;

  function traverse(curr, higher, lower) {
    console.log(higher, lower);
    if (lower || lower == 0) {
      console.log("came here 1", curr.val);
      if (curr.val <= lower) {
        flag = false;
      }
    }
    if (higher || higher == 0) {
      console.log("came here 2", curr.val);
      if (curr.val >= higher) {
        flag = false;
      }
    }

    curr?.left && traverse(curr.left, curr?.val, lower);
    curr?.right && traverse(curr.right, higher, curr?.val);
  }

  traverse(root, null, null);
  return flag;
};
