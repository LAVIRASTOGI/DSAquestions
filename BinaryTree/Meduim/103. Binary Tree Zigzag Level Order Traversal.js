// Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then right to left for the next level and alternate between).

// Example 1:

// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[20,9],[15,7]]
// Example 2:

// Input: root = [1]
// Output: [[1]]
// Example 3:

// Input: root = []
// Output: []

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
var zigzagLevelOrder = function (root) {
  if (!root) return [];
  let ans = [];
  let queue = [root];
  let level = 0;

  while (queue?.length) {
    let levelArr = [];
    let levelSize = queue.length;
    for (let i = 0; i < levelSize; i++) {
      let curr = queue.shift();
      if (level % 2 == 0) {
        levelArr.push(curr?.val);
      } else {
        levelArr.unshift(curr?.val);
      }
      curr?.left && queue.push(curr?.left);
      curr?.right && queue.push(curr?.right);
    }
    ans.push(levelArr);
    ++level;
  }
  return ans;
};
