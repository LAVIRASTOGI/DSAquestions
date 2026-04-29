// 101. Symmetric Tree
// Easy
// Topics
// premium lock icon
// Companies
// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

// Example 1:

// Input: root = [1,2,2,3,4,4,3]
// Output: true
// Example 2:

// Input: root = [1,2,2,null,3,null,3]
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
 * @param {TreeNode} root
 * @return {boolean}
 */
// recursive
var isSymmetric = function (root) {
  function isMirror(left, right) {
    if (!left && !right) return true;

    if (!left || !right) return false;
    return (
      left?.val === right?.val &&
      isMirror(left.left, right?.right) &&
      isMirror(left?.right, right?.left)
    );
  }

  return isMirror(root?.left, root?.right);
};

// itertive

var isSymmetric = function (root) {
  let q = [root?.left, root?.right];

  while (q?.length) {
    let p1 = q.shift();
    let p2 = q.shift();
    if (!p1 && !p2) continue;
    if (p1?.val !== p2?.val) return false;
    q.push(p1?.left, p2?.right);
    q.push(p1?.right, p2?.left);
  }

  return true;
};
