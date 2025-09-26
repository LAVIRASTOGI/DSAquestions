/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
// var removeNthFromEnd = function (head, n) {
//   let listNode = head;
//   let lengthNode = 0;
//   while (listNode) {
//     lengthNode++;
//     listNode = listNode.next;
//   }

//   let senitalNode = new ListNode();
//   senitalNode.next = head;
//   let list1 = senitalNode;
//   let counter = 0;
//   let removeNode = lengthNode - n; // 3
//   while (list1 && list1.next) {
//     if (counter === removeNode) {
//       list1.next = list1?.next?.next;
//     }
//     counter++;
//     list1 = list1.next;
//   }

//   return senitalNode.next;
// };
