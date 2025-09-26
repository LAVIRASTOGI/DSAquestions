/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
//hashtable - set
// explain
// we will use a set to store the nodes we have seen so far
// we will iterate through the linked list and add the nodes to the set
// if we see a node that is already in the set, we return true
// if we reach the end of the linked list, we return false
// var hasCycle = function (head) {
//   let curr = head;
//   let nodeSet = new Set();
//   while (curr !== null) {
//     if (nodeSet.has(curr)) {
//       return true;
//     }
//     nodeSet.add(curr);
//     curr = curr.next;
//   }

//   return false;
// };

// next way to solve this question - using floyd's alogthrim
// explain
// we will use two pointers, slow and fast
// slow will move one step at a time
// fast will move two steps at a time
// if there is a cycle, slow and fast will meet at some point
// if there is no cycle, fast will reach the end of the linked list
// if there is a cycle, we return true
// if there is no cycle, we return false

var hasCycle = function (head) {
  let slow = head;
  let fast = head?.next;
  while (slow !==fast){
    if(fast == null || fast.next == null) return false;
    slow = slow?.next;
    fast = fast?.next?.next;
  }
  return true;  
  
};
