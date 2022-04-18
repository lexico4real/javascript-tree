// const stairCase = (n) => {
//   let stairs = '';
//   for (let i = 0; i < n; i++) {
//     stairs += '#';
//     console.log(stairs);
//   }
// }

function stairCase(n) {
  // Write your code here
  let hash;
  for (let i = 0; i < n; i++) {
    console.log((hash += '#'));
    return hash += '#';
  }
}

console.log(stairCase(5))