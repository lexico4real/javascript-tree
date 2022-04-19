function miniMaxSum(arr) {
  // Write your code here
  let sum = 0;
  let min = 0;
  let max = 0;

  for (let i = 0; i < arr.length; i++) {
    min += arr[i];
  }
  console.log(min, max);
}

miniMaxSum([1, 3, 5, 7, 9]);
