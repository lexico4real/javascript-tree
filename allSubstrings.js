let result = [];
const allSubstrings = (str, curr = "", index = 0) => {
  if(index === str.length) {
    if (curr !== '') {
      result.push(curr);
    }
    return result;
  }
  allSubstrings(str, curr, index + 1);
  allSubstrings(str, curr + str[index], index + 1);
}
allSubstrings('abcd');
console.log(result)

const permutation =(str) => {
  var perm = [];
  var str = str.split('');
  var len = str.length;
  var i, j, tmp;
  for (i = 0; i < len; i++) {
    for (j = 1; j < len; j++) {
      if (i != j) {
        tmp = str[i];
        str[i] = str[j];
        str[j] = tmp;
        perm.push(str.join(''));
        tmp = str[i];
        str[i] = str[j];
        str[j] = tmp;
      }
    }
  }
  return perm;
}