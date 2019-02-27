const swap = (array, i, j) => {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};

function selectionSort(array) {
  let idx = 0;

  while (idx < array.length - 1) {
    let smallestIdx = idx;

    for (let i = idx + 1; i < array.length; i++) {
      if (array[smallestIdx] > array[i]) smallestIdx = i;
    }

    swap(array, smallestIdx, idx);
    idx++;
  }
  return array;
}

console.log(selectionSort([8, 5, 2, 9, 5, 6, 3]));
