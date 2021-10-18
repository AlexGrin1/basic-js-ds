const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

module.exports = class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  root() {
    return this.root;
  }

  add(data) {
    this.root = addNewNode(this.root, data);
    function addNewNode(root, newValue) {
      if (!root) {
        return new Node(newValue);
      }
      if (root.data === newValue) {
        return root;
      }
      if (newValue < root.data) {
        root.left = addNewNode(root.left, newValue);
      } else {
        root.right = addNewNode(root.right, newValue);
      }
      return root;
    }
  }

  has(data, getInclide = false) {
    return hasIn(this.root, data);
    function hasIn(node, value) {
      if (!node) {
        return false;
      }
      if (node.data === value) {
        if (getInclide) {
          return node;
        } else return true;
      }
      return value < node.data ? hasIn(node.left, value) : hasIn(node.right, value);
    }
  }

  find(data) {
    return this.has(data) === true ? this.has(data, true) : null;
  }

  remove(data) {}

  min() {}

  max() {}
};
