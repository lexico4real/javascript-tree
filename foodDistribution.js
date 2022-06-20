function foodDistribution(arr) {
  let N = arr.shift();
  let hungers = arr;
  let diffs = differences(hungers);
  if (N >= diffs) {
    return 0;
  }
  while (N > 0 && sum(diffs) > 0) {
    let combos = [];
    for (let i = 0; i < hungers.length; i++) {
      let combo = hungers.slice();
      combo[i]--;
      combos.push(combo);
    }

    hungers = combos.reduce(minDiff);
    N--;

    diffs = differences(hungers);
  }

  return sum(diffs);
}

// HELPER METHODS
// Returns an array of differences across each pair
function differences(array) {
  let diffs = [];

  for (let i = 0; i < array.length - 1; i++) {
    diffs.push(Math.abs(array[i] - array[i + 1]));
  }
  return diffs;
}

// Returns the sum of all values in an array (i.e. sum of all diffs)
function sum(array) {
  return array.reduce((p, c) => p + c, 0);
}

// Compares two array and returns the array with the smallest sum of differences
function minDiff(arr1, arr2) {
  if (sum(differences(arr1)) <= sum(differences(arr2))) {
    return arr1;
  } else {
    return arr2;
  }
}

// GIVEN TEST CASES
console.log(foodDistribution([5, 3, 1, 2, 1])); // return 0 b/c you distribute 5 sandwiches as 2, 0, 1, 0, making hunger levels [1, 1, 1, 1]

console.log(foodDistribution([5, 2, 3, 4, 5])); // return 1 b/c you distribute 5 sandwiches as 2, 2, 1, 0 making hunger levels [4,5,5,5]

console.log(foodDistribution([3, 2, 1, 0, 4, 1, 0])); // return 4

// ADDITIONAL TEST CASES
console.log(foodDistribution([1, 5, 4, 1])); // return 3
console.log(foodDistribution([20, 5, 4, 1])); // return 0
console.log(foodDistribution([5, 4, 2, 5, 1, 1])); // return 1
console.log(foodDistribution([12, 5, 5, 5, 5, 5])); // return 0
