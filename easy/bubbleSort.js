const swapper = (array, x, y) => {
  let temp = array[x];
  array[x] = array[y];
  array[y] = temp;

  return array;
};

function bubbleSort(array) {
  let len = array.length;

  while (len > 0) {
    for (let i = 0; i < len; i++) {
      if (array[i] > array[i + 1]) {
        swapper(array, i, i + 1);
      }
    }

    len--;
  }

  return array;
}

console.log(bubbleSort([8, 5, 2, 9, 5, 6, 3]));
