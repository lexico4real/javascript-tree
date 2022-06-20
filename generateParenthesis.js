/*
  class Solution {
    public List<String> generateParenthesis(int n) {
        List<String> ans = new ArrayList();
        if (n == 0) {
            ans.add("");
        } else {
            for (int c = 0; c < n; ++c)
                for (String left: generateParenthesis(c))
                    for (String right: generateParenthesis(n-1-c))
                        ans.add("(" + left + ")" + right);
        }
        return ans;
    }
}
*/

function generateParenthesis(n) {
  if (n == 0) {
    return [''];
  }
  let ans = [];
  for (let c = 0; c < n; ++c) {
    for (let left of generateParenthesis(c)) {
      for (let right of generateParenthesis(n - 1 - c)) {
        ans.push('(' + left + ')' + right);
      }
    }
  }
  return ans;
}

console.log(generateParenthesis(3));
