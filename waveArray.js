const waveArray = (arr) => {
  arr = arr.sort(function (a, b) {
    return a - b;
  });
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if ((i + 1) % 2 === 0) {
      result.push(arr[i], arr[i - 1]);
    }
  }
  if (arr.length % 2 === 1) {
    result.push(arr[arr.length - 1]);
  }
  return result;
};
console.log(waveArray([4, 2, 9, 1, 21, 43, 24]));
