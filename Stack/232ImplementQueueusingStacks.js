var MyQueue = function () {
  this.stack1 = [];
  this.stack2 = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.stack1.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  let n = this.stack1.length;
  for (let i = 0; i < n ; i++) {
    this.stack2.push(this.stack1.pop());
  }
  let ans = this.stack2.pop();

  let n2 = this.stack2.length;
  for (let i = 0; i < n2; i++) {
    this.stack1.push(this.stack2.pop());
  }
  console.log(this.stack1)
  return ans;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  let n = this.stack1.length;
  for (let i = 0; i < n - 1; i++) {
    this.stack2.push(this.stack1.pop());
  }
  let ans = this.stack1.pop();
  this.stack2.push(ans);

  let n2 = this.stack2.length;
  for (let i = 0; i < n2; i++) {
    this.stack1.push(this.stack2.pop());
  }
  //   console.log(this.stack1);
  return ans;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  console.log(this.stack1);
  return this.stack1.length === 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
