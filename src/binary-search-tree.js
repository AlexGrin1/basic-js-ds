const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

module.exports = class BinarySearchTree {
  constructor() {
    this.rootValue = null;
  }
  root() {
    return this.rootValue;
  }

  add(data) {
    this.rootValue = addNewNode(this.rootValue, data);
    function addNewNode(rootData, newValue) {
      if (!rootData) {
        return new Node(newValue);
      }
      if (rootData.data === newValue) {
        return rootData;
      }
      if (newValue < rootData.data) {
        rootData.left = addNewNode(rootData.left, newValue);
      } else {
        rootData.right = addNewNode(rootData.right, newValue);
      }
      return rootData;
    }
  }

  has(data, getInclide = false) {
    return hasIn(this.rootValue, data);
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

  min() {
    if (!this.rootValue) {
      return;
    }
    let minValue = this.rootValue;
    while (minValue.left != undefined) {
      minValue = minValue.left;
    }
    return minValue.data;
  }

  max() {
    if (!this.rootValue) {
      return;
    }
    let maxValue = this.root;
    while (maxValue.right != undefined) {
      maxValue = maxValue.right;
    }
    return maxValue.data;
  }
};
