//Leetcode : 104. Maximum Depth of Binary Tree

/**  1
 * Approach : DFS (Inorder, preOrder, Post order)
 * TC - O(N)
 * SC - O(N)
 */


function maxDepth(root: TreeNode | null): number {
    if(root == null) return 0;
 
   let left =  maxDepth(root.left);
   let right = maxDepth(root.right);
    return 1+ ((left > right ) ? left : right );
 }