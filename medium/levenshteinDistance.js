function levenshteinDistance(str1, str2) {
  let twodarray = [];

  for (let i = 0; i < str2.length + 1; i++) {
    let row = [];
    for (let j = 0; j < str1.length + 1; j++) {
      row.push(j);
    }
    row[0] = i;
    twodarray.push(row);
  }

  for (let r = 1; r < str2.length + 1; r++) {
    for (let c = 1; c < str1.length + 1; c++) {
      if (str2[r - 1] === str1[c - 1]) {
        twodarray[r][c] = twodarray[r - 1][c - 1];
      } else {
        twodarray[r][c] =
          1 +
          Math.min(
            twodarray[r][c - 1],
            twodarray[r - 1][c],
            twodarray[r - 1][c - 1]
          );
      }
    }
  }

  return twodarray[str2.length][str1.length];
}

console.log(levenshteinDistance('lkajsd', 'lkjasdldkas'));
console.log(levenshteinDistance('homer', 'comensal'));
console.log(levenshteinDistance('lowecase', 'promises'));
console.log(levenshteinDistance('artificial', 'intelligence'));
