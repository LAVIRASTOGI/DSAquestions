/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function (l1, l2) {
  let list1 = l1;
  let list2 = l2;
  let digitCarry = 0;
  let ans = new ListNode();
  let ansCopy = ans;

  while (list1 || list2 || digitCarry) {
    let lis1Val = list1?.val ?? 0;
    let lis2Val = list2?.val ?? 0;
    let sum = Number(lis1Val) + Number(lis2Val);
    let totalSum = Number(sum % 10) + Number(digitCarry);
    digitCarry = Math.floor(sum / 10);
    if (totalSum === 10) {
      digitCarry = 1;
      totalSum = 0;
    } else {
      digitCarry = Math.floor(sum / 10);
    }

    ans.next = new ListNode(totalSum);
    ans = ans.next;
    list1 = list1 && list1?.next;
    list2 = list2 && list2?.next;
  }

  return ansCopy.next;
};
