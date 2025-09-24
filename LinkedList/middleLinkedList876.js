/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// use slow fast pointer approach
// slow pointer will move one step at a time
// fast pointer will move two steps at a time
// when fast pointer reaches the end of the list, slow pointer will be at the middle of the list
// return the slow pointer
var middleNode = function (head) {
  let slow = head;
  let fast = head;

  while (fast != null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
};
