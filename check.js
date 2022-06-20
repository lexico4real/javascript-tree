// function timeToPrint(a, b) {
//   let P = Math.abs(a - b);
//   let Q = 26 - P;
//   return Math.min(P, Q);
// }

// function getTime(A) {
//   let cnt = 0;
//   let last = 'A';
//   for (let curr of A) {
//     cnt += timeToPrint(last, curr);
//     last = curr;
//   }
//   return cnt;
// }

// console.log(getTime('AZGB'));

let array = [2, 5, 1, 4, 9];
let limit = 2;
for (let i = 0; i < array.length; i++) {
  for (let j = i; j < limit + i; j++) {
    console.log(array[j]);
  }
}

