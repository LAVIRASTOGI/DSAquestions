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
var oddEvenList = function (head) {
  let oddList = head;
  let evenList = head.next;

  let evenStart=evenList

  while(oddList.next && evenList.next){
    oddList.next=oddList.next.next;
    evenList.next=evenList.next.next;
    oddList=oddList.next;
    evenList=evenList.next;
  }

  oddList.next=evenStart

  return head
  
  
};
