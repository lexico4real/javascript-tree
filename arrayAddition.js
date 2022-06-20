function arrayAddition(arr) {
  arr.sort(function (a, b) {
    return a - b;
  });
  var maxNum = arr.pop();
  var tot = 0;

  for (var i = 0; i < arr.length; i++) {
    tot += arr[i];
    for (var j = 0; j < arr.length; j++) {
      if (i != j) {
        tot += arr[j];
        if (tot == maxNum) {
          return true;
        }
      }
    }

    for (var k = 0; k < arr.length; k++) {
      if (i != k) {
        tot -= arr[k];
        if (tot == maxNum) {
          return true;
        }
      }
    }
    tot = 0;
  }

  return false;
}

console.log(arrayAddition([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));