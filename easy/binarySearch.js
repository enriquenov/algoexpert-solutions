const binarySearchHelper = (array, target, left, right) => {
  if (left > right) return -1;

  const mid = Math.floor((left + right) / 2);
  const midVal = array[mid];

  if (midVal === target) {
    return mid;
  } else if (midVal > target) {
    return binarySearchHelper(array, target, left, mid - 1);
  } else {
    return binarySearchHelper(array, target, mid + 1, right);
  }
};

function binarySearch(array, target) {
  return binarySearchHelper(array, target, 0, array.length - 1);
}

console.log(binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 45));
