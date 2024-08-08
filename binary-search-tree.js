class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    // If empty tree, inserts val at root
    if (this.root===null) {
      this.root = new Node(val);
      return this;
    }

    // finds appropriate spot for new node
    let currentNode = this.root;
    while (true) {
      // insert at left of subtree
      if (val < currentNode.val){
        if (currentNode.left === null){
          currentNode.left = new Node(val);
          return this;
        }
        currentNode = currentNode.left;
      } 
      // insert at right of subtree
      else{
        if (currentNode.right===null){
          currentNode.right = new Node(val);
          return this;
        }
        currentNode = currentNode.right;
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, currentNode = this.root) {
      
    // If empty tree, inserts val at root
    if (this.root ===null) {
      this.root = new Node(val);
      return this;
    }

    // insert at left of tree
    if (val < currentNode.val){
      if (currentNode.left === null){
        currentNode.left = new Node(val);
        return this;
      }
      return this.insertRecursively(val, currentNode.left);
    }
    // insert at right of tree
    else{
      if(currentNode.right===null){
        currentNode.right = new Node(val);
        return this;
      }
      return this.insertRecursively(val, currentNode.right);
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let currentNode = this.root;
    while (currentNode){
      if (currentNode.val === val) return currentNode;
      currentNode = val < currentNode.val ? currentNode.left : currentNode.right;
    }
    return undefined;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, currentNode = this.root) {
    // base case
    if (currentNode === null) return undefined;
    // if found, return node
    if (currentNode.val === val) return currentNode;
    // recur on left or right 
    if (val < currentNode.val){
      return this.findRecursively(val, currentNode.left);
    }
    else{
      return this.findRecursively(val, currentNode.right);
    }
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder(currentNode = this.root, visited = []) {
    // base case 
    if (currentNode === null) return visited;
    // traverse and add onto array
    visited.push(currentNode.val);
    // recur on left
    if (currentNode.left) this.dfsPreOrder(currentNode.left, visited);
    //recur on right
    if (currentNode.right) this.dfsPreOrder(currentNode.right, visited);
    return visited;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder(currentNode=this.root, visited=[]) {
    // base case 
    if (currentNode === null) return visited;
    // recur on left
    if (currentNode.left) this.dfsInOrder(currentNode.left, visited);
    // traverse and add onto array
    visited.push(currentNode.val);
    //recur on right
    if (currentNode.right) this.dfsInOrder(currentNode.right, visited);
    return visited;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder(currentNode=this.root, visited=[]) {
    // base case 
    if (currentNode === null) return visited;
    // recur on left
    if (currentNode.left) this.dfsPostOrder(currentNode.left, visited);
    //recur on right
    if (currentNode.right) this.dfsPostOrder(currentNode.right, visited);
    // traverse and add onto array
    visited.push(currentNode.val);
    return visited;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let currentNode = this.root;
    let toVisitQueue = [];
    let visited = [];
    
    toVisitQueue.push(currentNode);
    while (toVisitQueue.length){
      currentNode = toVisitQueue.shift();
      visited.push(currentNode.val);
      if(currentNode.left){
        toVisitQueue.push(currentNode.left);
      }
      if(currentNode.right){
        toVisitQueue.push(currentNode.right);
      }
    }
    return visited;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove() {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }

  /** Further Study
   * dfsInOrderIteratively(): another version of the dfsInOrder function w/o recursion.  */

  dfsInOrderIteratively(){
    let currentNode = this.root;
    let toVisitStack = [];
    let visited = [];

    while (toVisitStack.length || currentNode){
      while (currentNode){
        toVisitStack.push(currentNode);
        currentNode= currentNode.left
      }
      currentNode = toVisitStack.pop();
      if (currentNode){
        visited.push(currentNode.val)
        currentNode = currentNode.right
      }
    }
    return visited;
  }
}

module.exports = BinarySearchTree;
