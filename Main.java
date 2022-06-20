class Main {

  // Function to calculate minimum time to
  // print all characters in the string
  static void minTime(String word) {

    int ans = 0;

    // Current element where the
    // pointer is pointing
    int curr = 0;

    for (int i = 0; i < word.length(); i++) {

      // Find index of that element
      int k = (int) word.charAt(i) - 97;
      
      // Calculate absolute difference
      // between pointer index and character
      // index as clockwise distance
      int a = Math.abs(curr - k);
      
      // Subtract clockwise time from
      // 26 to get anti-clockwise time
      int b = 26 - Math.abs(curr - k);
      System.out.println(b);

      // Add minimum of both times to
      // the answer
      ans += Math.min(a, b);

      // Add one unit time to print
      // the character
      ans++;

      curr = (int) word.charAt(i) - 97;
    }

    // Print the final answer
    System.out.print(ans);
  }

  // Driver code
  public static void main(String[] args) {

    // Given string word
    String str = "bza";

    // Function call
    minTime(str);
  }

}