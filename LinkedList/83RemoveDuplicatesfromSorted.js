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
var deleteDuplicates = function(head) {
      let list = head;
  while (list && list.next) {
    if (list.next.val === list.val) {
      list.next = list.next.next;
    } else {
      list = list?.next;
    }
  }

  return head
};