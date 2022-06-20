/*
 * A server experiences a sudden increase in load at time There are eight
 * processes A to H on the server, each process has four states: created,
 * waiting, running, terminated. on metrics. Please check the log and find out
 * what process causes the increase.
 */

 class Solution {
  public String solution(int t, String[] logs) {
    // write your code in Java 8
    String answer = "";
    int[] process = new int[8];
    int[] state = new int[8];
    int[] time = new int[8];
    int[] time_state = new int[8];

    for (int i = 0; i < 8; i++) {
      process[i] = i + 1;
      state[i] = 0;
      time[i] = 0;
      time_state[i] = 0;
    }

    for (int i = 0; i < logs.length; i++) {
      String[] log = logs[i].split(" ");
      int p = Integer.parseInt(log[0]);
      int s = Integer.parseInt(log[1]);
      int tt = Integer.parseInt(log[2]);

      if (s == 1) {
        state[p - 1] = 1;
        time[p - 1] = tt;
        time_state[p - 1] = tt;
      } else if (s == 2) {
        state[p - 1] = 2;
        time[p - 1] = tt;
        time_state[p - 1] = tt;
      } else if (s == 3) {
        state[p - 1] = 3;
        time[p - 1] = tt;
        time_state[p - 1] = tt;
      } else if (s == 4) {
        state[p - 1] = 4;
        time[p - 1] = tt;
        time_state[p - 1] = tt;
      } else if (s == 5) {
        state[p - 1] = 0;
        time[p - 1] = tt;
        time_state[p - 1] = tt;
      } else if (s == 6) {
        state[p - 1] = 0;
        time[p - 1] = tt;
        time_state[p - 1] = tt;
      } else if (s == 7) {
        state[p - 1] = 0;
        time[p - 1] = tt;
        time_state[p - 1] = tt;
      } else if (s == 8) {
        state[p - 1] = 0;
        time[p - 1] = tt;
        time_state[p - 1] = tt;
      }
    }

    int max = 0;
    int max_p = 0;
    for (int i = 0; i < 8; i++) {
      if (time_state[i] > max) {
        max = time_state[i];
        max_p = i;
      }
    }

    answer = String.valueOf(process[max_p]);

    return answer;
  }
}