function threeNumberSum(array, targetSum) {
  array.sort((a, b) => a - b);
  let result = [];

  for (let i = 0; i < array.length; i++) {
    let left = i + 1;
    let right = array.length - 1;
    let remaining = targetSum - array[i];

    while (left < right) {
      if (array[left] + array[right] < remaining) {
        left++;
      } else if (array[left] + array[right] > remaining) {
        right--;
      } else {
        result.push([array[i], array[left], array[right]]);
        left++;
        right--;
      }
    }
  }

  return result;
}

console.log(threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0));
