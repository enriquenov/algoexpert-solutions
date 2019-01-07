function getNthFib(n) {
  // Naive Solution:
  //
  // Time complexity  = O(2^n) => (Every element calls the getNthFib function twice until it reaches the base case)
  // Space complexity = O(n)   => (Using memory due to the call stack)
  //
  // if (n === 2) {
  // 	return 1;
  // } else if (n === 1) {
  // 	return 0;
  // } else {
  // 	return getNthFib(n-1) + getNthFib(n-2);
  // }

  // Good Solution:
  //
  // Time complexity  = 0(n)
  // Space complexity = 0(n)
  //
  // Add second parameter: memoize = { 1: 0, 2: 1 }
  //
  // if (memoize.hasOwnProperty(n)) {
  //   return memoize[n];
  // } else {
  //   memoize[n] = getNthFib(n - 1, memoize) + getNthFib(n - 2, memoize);
  //   return memoize[n];
  // }

  // Optimal Solution:
  // Time complexity  = 0(n)
  // Space complexity = 0(1)

  let lastTwo = [0, 1];
  let counter = 2;

  if (n === 2) return 1;
  else if (n === 1) return 0;
  else {
    while (counter <= n) {
      let nextFib = lastTwo[0] + lastTwo[1];
      lastTwo[0] = lastTwo[1];
      lastTwo[1] = nextFib;
      counter++;
      if (counter === n) {
        return lastTwo[1];
      }
    }
  }
}

console.log(getNthFib(7));
