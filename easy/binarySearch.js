// O(log(n)) time | O(1) space

const binarySearchHelper = (array, target, left, right) => {
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const midVal = array[mid];

    if (midVal === target) {
      return mid;
    } else if (midVal > target) {
      right = mid - 1;
    } else {
      right = mid + 1;
    }
  }

  return -1;
};

function binarySearch(array, target) {
  return binarySearchHelper(array, target, 0, array.length - 1);
}

console.log(binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 45));
