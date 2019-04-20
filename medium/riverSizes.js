function riverSizes(matrix) {
  let visitedMatrix = matrix.map(row => row.map(val => false));
  let sizes = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (visitedMatrix[i][j]) continue;
      traverse(i, j, matrix, visitedMatrix, sizes);
    }
  }

  return sizes;
}

const traverse = (i, j, matrix, visitedMatrix, sizes) => {
  let riverSize = 0;
  let nodesToExplore = [[i, j]];

  while (nodesToExplore.length) {
    let currentNode = nodesToExplore.pop();
    i = currentNode[0];
    j = currentNode[1];
    if (visitedMatrix[i][j] === true) continue;
    visitedMatrix[i][j] = true;

    if (matrix[i][j] === 0) continue;
    riverSize++;

    let unvisitedNeighbors = legalMoves(i, j, visitedMatrix);
    unvisitedNeighbors.forEach(neighbor => {
      nodesToExplore.push(neighbor);
    });
  }

  if (riverSize > 0) sizes.push(riverSize);
};

const legalMoves = (i, j, visitedMatrix) => {
  let unvisited = [];

  // north
  if (visitedMatrix[i] && visitedMatrix[i][j - 1] === false)
    unvisited.push([i, j - 1]);
  // south
  if (visitedMatrix[i] && visitedMatrix[i][j + 1] === false)
    unvisited.push([i, j + 1]);
  // west
  if (visitedMatrix[i - 1] && visitedMatrix[i - 1][j] === false)
    unvisited.push([i - 1, j]);
  // east
  if (visitedMatrix[i + 1] && visitedMatrix[i + 1][j] === false)
    unvisited.push([i + 1, j]);

  return unvisited;
};
