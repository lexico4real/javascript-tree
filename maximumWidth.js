class Node {
  constructor(item) {
    this.data = item;
    this.left = this.right = null;
  }
}

// Driver Code
let root;
let maxx = 0;

// Stores the position of leftmost
// and rightmost node in each level
let hm_min = new Map();
let hm_max = new Map();

// Function to store the min and the
// max index of each nodes in hashmaps
function getMaxWidthHelper(node, lvl, i) {
  // Base Case
  if (node == null) {
    return;
  }

  // Stores rightmost node index
  // in the hm_max
  if (hm_max.has(lvl)) {
    hm_max.set(lvl, Math.max(i, hm_max.get(lvl)));
  } else {
    hm_max.set(lvl, i);
  }

  // Stores leftmost node index
  // in the hm_min
  if (hm_min.has(lvl)) {
    hm_min.set(lvl, Math.min(i, hm_min.get(lvl)));
  }

  // Otherwise
  else {
    hm_min.set(lvl, i);
  }

  // If the left child of the node
  // is not empty, traverse next
  // level with index = 2*i + 1
  getMaxWidthHelper(node.left, lvl + 1, 2 * i + 1);

  // If the right child of the node
  // is not empty, traverse next
  // level with index = 2*i + 2
  getMaxWidthHelper(node.right, lvl + 1, 2 * i + 2);
}

// Function to find the maximum
// width of the tree
function getMaxWidth(root) {
  // Helper function to fill
  // the hashmaps
  getMaxWidthHelper(root, 0, 0);

  // Traverse to each level and
  // find the maximum width
  for (let [lvl, value] of hm_max.entries()) {
    maxx = Math.max(maxx, hm_max.get(lvl) - hm_min.get(lvl) + 1);
  }

  // Return the result
  return maxx;
}

// Driver Code
root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.right = new Node(8);
root.right.right.left = new Node(6);
root.right.right.right = new Node(7);

// Function Call
console.log(getMaxWidth(root));
