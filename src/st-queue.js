const { NotImplementedError } = require("../extensions/index.js");

const { ListNode } = require("../extensions/list-node.js");

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
module.exports = class Queue {
  constructor() {
    this.linkedList = null;
  }

  getUnderlyingList() {
    return this.linkedList;
  }

  enqueue(value) {
    let node = new ListNode(value);
    if (this.linkedList === null) {
      this.linkedList = node;
    } else {
      let actual = this.linkedList;
      while (actual.next) {
        actual = actual.next;
      }
      actual.next = node;
    }
  }

  dequeue() {
    let value = this.linkedList.value;
    this.linkedList = this.linkedList.next;
    return value;
  }
};
