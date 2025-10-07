/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

// explaination
// we are using two pointers to merge the two lists
// we are using a while loop to iterate through the lists
// we are using an if statement to check if the current element is in the first list
// if it is, we are adding it to the merged list
// if it is not, we are adding it to the merged list
// finally, we are returning the merged list
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
var mergeTwoLists = function (list1, list2) {
  let mergeList = new ListNode();
  let mergeListHead = mergeList;

  let p1 = list1;
  let p2 = list2;

  while (p1 && p2) {
    if (p1.val <= p2.val) {
      mergeList.next = new ListNode(p1.val);
      p1 = p1.next;
    } else {
      mergeList.next = new ListNode(p2.val);
      p2 = p2.next;
    }
    mergeList = mergeList.next;
  }

  if (p1) {
    mergeList.next = p1;
  }
  if (p2) {
    mergeList.next = p2;
  }
  console.log(mergeListHead);
  return mergeListHead.next;
};
mergeTwoLists();
