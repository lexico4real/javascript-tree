class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    this.items.pop();
  }

  top() {
    return this.items[this.items.length - 1];
  }

  minimum() {
    let small = this.items[0];
    for (let i = 0; i < this.items.length; i++) {
      if (small > this.items[i]) {
        small = this.items[i];
      }
    }
    return small;
  }

  indexOf(item) {
    for (const i = 0; i < this.items.length; i++) {
      if (this.items[i] === item) {
        return i;
      }
    }
  }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
stack.pop();
console.log(stack.items);
console.log(stack.minimum());
console.log(stack.top());
