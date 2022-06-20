//balanced array

const balancedArray = (arr) => {
    let sum = 0;
    let left = 0;
    let right = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < sum - arr[i]) {
            left += arr[i];
        }
        if (arr[i] > sum - arr[i]) {
            right += arr[i];
        }
    }
    if (left === right) {
        console.log(true);
    } else {
        console.log(false);
    }
}