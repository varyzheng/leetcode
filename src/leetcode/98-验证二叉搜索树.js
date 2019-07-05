const isBST = (node, min, max) => {
  if (!node) {
    return true;
  }
  if (max != null && node.val >= max) {
    return false;
  }
  if (min != null && node.val <= min) {
    return false;
  }
  return isBST(node.left, min, node.val) && isBST(node.right, node.val, max);
};
export const isValidBST = root => isBST(root, null, null);
