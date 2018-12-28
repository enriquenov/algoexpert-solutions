// function twoNumberSum(array, targetSum) {
//   let result = [];

//   for (let i = 0; i < array.length; ++i) {
//     let current = array[i];
//     let diff = targetSum - current;

//     if (array.indexOf(diff) >= 0 && array.indexOf(diff) !== i) {
//       result.push(current);
//     }
//   }

//   return result.sort((a, b) => a - b);
// }

function twoNumberSum(array, targetSum) {
  let hash = {};

  for (let i = 0; i < array.length; i++) {
    let cur = array[i];
    let diff = targetSum - cur;

    if (hash.hasOwnProperty(diff)) {
      return [cur, diff].sort((a, b) => a - b);
    } else {
      hash[cur] = true;
    }
  }

  return [];
}

twoNumberSum([4, 6], 10);
twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10);
