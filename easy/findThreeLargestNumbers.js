function findThreeLargestNumbers(array) {
  let threeLargest = new Array(3);

  array.forEach(e => updateLargest(threeLargest, e));

  return threeLargest;
}

const updateLargest = (threeLargest, num) => {
  if (!threeLargest[2] || num > threeLargest[2]) {
    shiftAndUpdate(threeLargest, num, 2); // TODO
  } else if (!threeLargest[1] || num > threeLargest[1]) {
    shiftAndUpdate(threeLargest, num, 1);
  } else if (!threeLargest[0] || num > threeLargest[0]) {
    shiftAndUpdate(threeLargest, num, 0);
  }
};

const shiftAndUpdate = (array, num, idx) => {
  for (let i = 0; i <= idx; i++) {
    if (i === idx) {
      array[i] = num;
    } else {
      array[i] = array[i + 1];
    }
  }
};

console.log(findThreeLargestNumbers([55, 43, 100, 11, 3, 10]));
