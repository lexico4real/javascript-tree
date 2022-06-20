function findElement(arr) {
  let n = arr.length;
  // Forming prefix sum array from 0
  var prefixSum = Array(n).fill(0);
  prefixSum[0] = arr[0];
  for (i = 1; i < n; i++) prefixSum[i] = prefixSum[i - 1] + arr[i];

  // Forming suffix sum array from n-1
  var suffixSum = Array(n).fill(0);
  suffixSum[n - 1] = arr[n - 1];
  for (i = n - 2; i >= 0; i--) suffixSum[i] = suffixSum[i + 1] + arr[i];

  // Find the point where prefix and suffix
  // sums are same.
  for (i = 1; i < n - 1; i++) if (prefixSum[i] == suffixSum[i]) return i;

  return -1;
}

// Driver code

var arr = [1, 2, 1];
// var n = arr.length;
console.log(findElement(arr));
