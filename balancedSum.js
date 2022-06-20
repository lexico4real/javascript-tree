// const balancedSum = (arr) => {
//     let sum = 0;
//     let left = 0;
//     let right = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < sum - arr[i]) {
//           left += arr[i];
//           if(left === arr[arr.length - 1]){
//             console.log(i + 1);
//           }
//         }
//     }
// }

// balancedSum([1, 2, 3, 4, 6]);

const arr = [4, 1, 2, 3, 3];
const balancingIndex = (arr = []) => {
   const findSum = arr => arr.reduce((acc, x) => acc + x, 0);
   for(let i = 0; i < arr.length; i++){
      const leftSum = findSum(arr.slice(0, i));
      const rightSum = findSum(arr.slice(i + 1));
      if(leftSum === rightSum){
         return i;
      };
   };
   return -1;
};
console.log(balancingIndex(arr));