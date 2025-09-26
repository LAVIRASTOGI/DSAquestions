// /**
//  * Definition for singly-linked list.
//  * function ListNode(val, next) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.next = (next===undefined ? null : next)
//  * }
//  */
// /**
//  * @param {ListNode} head
//  * @return {boolean}
//  */

// function pallindromeHandler(arr) {
//   if (arr.length) {
//     if (arr.length == 1) {
//       return false;
//     }
//     let left = 0;
//     let right = arr.length - 1;
//     while (left <= right) {
//       if (arr[left] !== arr[right]) {
//         return false;
//       }
//       left++;
//       right--;
//     }

//     return true;
//   } else {
//     return false;
//   }
// }
// var isPalindrome = function (head) {
//   let arr = [];
//   let curr = head;
//   while (curr?.next !== null) {
//     arr.push(curr.val);
//     curr = curr.next;
//   }

//   return pallindromeHandler(arr)
// };

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

var isPalindrome = function (head) {
  let slow = head;
  let fast = head;

  // middle

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // reverse

  let prev = null;
  let curr = slow;

  while (curr) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  // check

  let list1 = head;
  let list2 = prev;

  while (list1.next != null && list2?.next != null) {
    if (list1.val !== list2.val) return false;

    list1 = list1.next;
    list2 = list2.next;
  }

  return 2
};
