class BinaryTree{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
    insertLeft(value){
        this.left = new BinaryTree(value);
        return this.left;
    }
    insertRight(value){
        this.right = new BinaryTree(value);
        return this.right;
    }

    // print all nodes
  print() {
    if (this.left) {
      this.left.print();
    }
    console.log(this.value);
    if (this.right) {
      this.right.print();
    }
  }
}

let root = new BinaryTree(1);
root.insertLeft(2);
root.insertRight(3);
root.left.insertLeft(4);
root.left.insertRight(5);
root.right.insertLeft(6);
root.right.insertRight(7);

root.print();