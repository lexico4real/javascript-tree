function plusMinus(arr) {
  let pos = 0;
  let neg = 0;
  let zero = 0;
  arr.forEach((e) => {
    if (e > 0) pos++;
    else if (e < 0) neg++;
    else if (e == 0) zero++;
  });
  console.log(pos / arr.length);
  console.log(neg / arr.length);
  console.log(zero / arr.length);
}

// function plusMinus(arr) {
//   let pos = 0,
//     neg = 0,
//     zero = 0,
//     length = arr.length;
//   arr.forEach((n) => {
//     if (n > 0) pos++;
//     else if (n < 0) neg++;
//     else zero++;
//   });
//   console.log((pos / length).toFixed(6));
//   console.log((neg / length).toFixed(6));
//   console.log((zero / length).toFixed(6));
// }