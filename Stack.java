public class Stack {
  private int[] items;
  private int size = 10000;
  private int count = 0;

  public Stack() {

  }

  public void push(int val) {
    if (size == count) {
      int[] temp = new int[size * 2];
      for (int i = 0; i < count; i++) {
        temp[i] = items[i];
      }
      items = temp;
    }
    items[count++] = val;
  }

  public void pop() {

  }

  public int top() {
    return items[count - 1];
  }

  public int getMin() {
    int small = items[0];
    for (int i = 0; i < items.length; i++) {
      if (small > items[i]) {
        small = items[i];
      }
    }
    return small;
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * MinStack obj = new MinStack();
 * obj.push(val);
 * obj.pop();
 * int param_3 = obj.top();
 * int param_4 = obj.getMin();
 */