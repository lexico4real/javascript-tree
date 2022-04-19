function miniMaxSum(arr) {
  // Write your code here
  let min = 0;
  let max = 0;
  count = 4;

    arr.sort(function(a, b){return a-b});

  for (let i = 0; i < arr.length; i++) {
    if (count === 0) {
      break;
    }
    max += arr[i];
    min += arr[arr.length - count]
      count--;
  }
  console.log(max, min);
}

miniMaxSum([1, 3, 5, 7, 9]);
