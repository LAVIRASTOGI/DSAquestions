/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */

// add one extra node on top
var removeElements = function (head, val) {
  let senitalNode = new ListNode();
  senitalNode.next = head;
  let prev = senitalNode;
  while (prev && prev.next) {
    if (prev?.next?.val === val) {
      prev.next = prev?.next?.next ?? null;
    } else {
      prev = prev.next;
    }
  }

  return senitalNode.next;
};
