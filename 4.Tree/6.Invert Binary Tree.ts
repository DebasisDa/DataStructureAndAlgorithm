//Leetcode : 226. Invert Binary Tree


/**  1
 * Approach : DFS (Inorder, preOrder, Post order)
 * TC - O(N)
 * SC - O(N)
 */


function invertTree(root: TreeNode | null): TreeNode | null {
    if(root == null) return null;

    let swap = root.left;
    root.left = root.right;
    root.right = swap;
    invertTree(root.left);
    invertTree(root.right);
    return root;
};