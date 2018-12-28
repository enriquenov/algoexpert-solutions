function findClosestValueInBst(tree, target) {
  return helper(tree, target, Infinity);
}

function helper(tree, target, closest) {
  if (!tree) return closest;

  if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
    closest = tree.value;
  }

  if (target < tree.value) {
    return helper(tree.left, target, closest);
  } else if (target > tree.value) {
    return helper(tree.right, target, closest);
  } else {
    return closest;
  }
}
