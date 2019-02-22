// Creating a 2D array using the following example:
//
//  prices --->     [5, 11, 3, 50, 60, 90]  with k = 2
//  0    0   0  0   0   0   0   maxProfit = 93
//  1    0   6  6  47  57  87
//  2    0   6  6  53  63 (93)

function maxProfitWithKTransactions(prices, k) {
  if (prices.length === 0) return 0;

  let profitrow = new Array(prices.length).fill(0);
  let profits = new Array(k + 1).fill(profitrow);

  // console.log(profits[0]);
}

maxProfitWithKTransactions([5, 11, 3, 50, 60, 90], 2);

// UNSOLVED
