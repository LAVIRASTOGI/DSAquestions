/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

// brute force approach
// var getIntersectionNode = function(headA, headB) {
//       let list1 = headA;
//   let list2 = headB;

// while(list1){
//   list2= headB
//  while(list2){
//     if(list1 === list2 ){
//         return list1

//     }
//     list2=list2.next
//  }
//   list1=list1.next
// }
//   return null;
// };

var getIntersectionNode = function (headA, headB) {
  let list1 = headA;
  let list2 = headB;
  // added list a in set
  let setListA = new Set();
  while (list1) {
    setListA.add(list1);
    list1 = list1.next;
  }

 while(list2){
    if(setListA.has(list2)){
        return list2
    }
    list2=list2.next
 }

 return null
};
