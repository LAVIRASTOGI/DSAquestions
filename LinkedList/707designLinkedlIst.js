// design a linked list

// you can use the Node class to create a linked list
// you can use the MyLinkedList class to create a linked list
// you can use the get method to get the value of a node at a given index
// you can use the addAtHead method to add a node at the head of the linked list
// you can use the addAtTail method to add a node at the tail of the linked list
// you can use the addAtIndex method to add a node at a given index
// you can use the deleteAtIndex method to delete a node at a given index
var MyLinkedList = function () {
  this.head = null;
  this.size = 0;
};

function Node(val) {
  this.value = val;
  this.next = null;
}

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  let curr = this.head;
  let counterIndex = 0;
  if (index > this.size - 1) {
    return -1;
  }
  if (index == 0) {
    return this.head.value;
  }

  while (counterIndex !== index) {
    counterIndex++;
    curr = curr.next;
  }

  if (counterIndex === index) {
    return curr?.value;
  } else {
    return -1;
  }
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  let newNode = new Node(val);
  newNode.next = this.head;
  this.head = newNode;
  this.size = this.size + 1;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  let newNode = new Node(val);

  if (this.head === null) {
    this.head = newNode;
    this.size++;
    return;
  }

  let curr = this.head;
  while (curr?.next !== null) {
    curr = curr.next;
  }

  curr.next = newNode;
  this.size++;
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  let newNode = new Node(val);

  if (index >= this.size) {
    return;
  }

  if (index === 0) {
    this.addAtHead(val);
    return;
  }

  if (index === this.size) {
    this.addAtTail(val);
    return;
  }
  let curr = this.head;
  let counterIndex = 0;

  while (curr.next !== null) {
    if (counterIndex === index - 1) {
      newNode.next = curr.next;
      curr.next = newNode;
      this.size++;
      return;
    }
    counterIndex++;
    curr = curr.next;
  }

  curr.next = newNode;
  this.size++;
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index == 0 && this.size == 1) {
    this.head = null;
    this.size = 0;
    return;
  }
  if (index > this.size - 1) {
    return;
  }

  if (index === 0) {
    this.head = this.head.next;
  }

  let curr = this.head;
  let counterIndex = 0;

  while (curr.next !== null) {
    if (counterIndex === index - 1) {
      curr.next = curr.next?.next;

      this.size--;
      return;
    }
    counterIndex++;
    curr = curr.next;
  }
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

let myLinkedList = new MyLinkedList();
// myLinkedList.addAtHead(1);
// myLinkedList.addAtTail(3);
// myLinkedList.addAtIndex(1, 2); // linked list becomes 1->2->3
// console.log(myLinkedList.get(1)); // return 2
// console.log("here", myLinkedList);
// myLinkedList.deleteAtIndex(1);
// console.log(myLinkedList); // now the linked list is 1->3
// console.log(myLinkedList.get(1));

// ["MyLinkedList","addAtHead","addAtHead","addAtHead","addAtIndex","deleteAtIndex","addAtHead","addAtTail","get","addAtHead","addAtIndex","addAtHead"]
// [[],[7],[2],[1],[3,0],[2],[6],[4],[4],[4],[5,0],[6]]

myLinkedList.addAtHead(7);
myLinkedList.addAtHead(2);
myLinkedList.addAtHead(1);
myLinkedList.addAtIndex(3, 0);

console.dir(myLinkedList);
