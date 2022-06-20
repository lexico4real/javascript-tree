/*
  Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
*/
var isValid = function (s) {
  while (s.includes('()') || s.includes('[]') || s.includes('{}')) {
    s = s.replace('()', '');
    s = s.replace('[]', '');
    s = s.replace('{}', '');
  }
  return s.length === 0;
};

console.log(isValid('[([])]'));
