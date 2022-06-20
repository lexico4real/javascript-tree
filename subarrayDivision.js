function birthday(s, d, m) {
  // Write your code here
  // let result = 0;
  // for (let i = 0; i < s.length; i++) {
  //   for (let j = i + 1; j < s.length; j++) {
  //     if (Math.abs(i - j) === 1 && s[i] + s[j] === d) {
  //       console.log([s[i], s[j]], '=', [s[i] + s[j]]);
  //       result++;
  //     }
  //   }
  // }
  // return result;
  let result = 0;
  let n = s.length;
  // console.log({ n, s, d, m });
  for (let i = 0; i < n; i++) {
    let limit = i + m;
    // if (limit > n) {
    //   break;
    // }

    let sum = 0;
    for (let j = i; j < limit; j++) {
      sum += s[j];
      console.log(s[j]);
    }

    if (sum == d) {
      ++result;
    }
  }

  return result;
}

console.log(birthday([1, 2, 1, 3, 2], 3, 2));
