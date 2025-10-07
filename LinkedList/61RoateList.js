/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 * 
 * 
 */

// explain
// first we need to find the size of the list
// then we need to find the kth node from the end of the list
// then we need to rotate the list
// then we need to return the new head of the list

var rotateRight = function (head, k) {
  if (!head || !head.next) {
    return head;
  }
  let list = head;
  let size = 0;
  while (list) {
    size++;
    list = list.next;
  }

  k = k % size;
  if (k == 0) {
    return head;
  }

let first = head;
for(let i=1;i<(size-k);i++){
    first=first.next
}

let tail= first.next;
first.next=null;

let tailCopy=tail;
while(tailCopy.next){
    tailCopy=tailCopy.next;
}
tailCopy.next=head;

return tail
};
