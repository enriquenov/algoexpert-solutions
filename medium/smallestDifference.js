function smallestDifference(arr1, arr2) {
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);
  let idx1 = 0;
  let idx2 = 0;
  let smallestPair = [];
  let smallestDiff = Infinity;
  let currentDiff = Infinity;

  while (idx1 < arr1.length && idx2 < arr2.length) {
    let firstNum = arr1[idx1];
    let secondNum = arr2[idx2];
    if (firstNum === secondNum) {
      return [firstNum, secondNum];
    } else if (firstNum < secondNum) {
      currentDiff = secondNum - firstNum;
      idx1++;
    } else {
      currentDiff = firstNum - secondNum;
      idx2++;
    }

    if (smallestDiff > currentDiff) {
      smallestDiff = currentDiff;
      smallestPair = [firstNum, secondNum];
    }
  }

  return smallestPair;
}

console.log(
  smallestDifference(
    [2, 3, 4, 6, 72, 86, 32, 54],
    [23, 45, 23, 71, 80, 34, 5, 7]
  )
);
