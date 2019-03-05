function getPermutations(arr) {
  const permutations = [];

  permutationsHelper(arr, [], permutations);

  const permutationsHelper = (array, currentPermutation, permutations) => {
    if (!array.length && currentPermutation.length) {
      permutations.push(currentPermutation);
    } else {
      for (let i = 0; i < array.length; i++) {
        const newArray = array.slice(0, i).concat(array.slice(i + 1));
        const newPermutation = currentPermutation.concat(array[i]);
        permutationsHelper(newArray, newPermutation, permutations);
      }
    }
  };
}

console.log(getPermutations([1, 2, 3]));
