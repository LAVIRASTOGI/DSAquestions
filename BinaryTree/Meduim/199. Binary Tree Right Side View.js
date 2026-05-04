// Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

// Example 1:

// Input: root = [1,2,3,null,5,null,4]

// Output: [1,3,4]

// Explanation:

// Example 2:

// Input: root = [1,2,3,4,null,null,null,5]

// Output: [1,3,4,5]

// Explanation:

// Example 3:

// Input: root = [1,null,3]

// Output: [1,3]

// Example 4:

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
 * @return {number[]}
 */
var rightSideView = function (root) {
  if (!root) return root;
  let ans = [];
  let q = [root];
  while (q?.length) {
    let levelArr = [];
    let levelsize = q.length;
    for (let i = 0; i < levelsize; i++) {
      let curr = q.shift();
      curr.left && q.push(curr.left);
      curr.right && q.push(curr.right);
      levelArr.push(curr.val);
    }

    ans.push(levelArr[levelArr.length - 1]);
  }

  return ans;
};
