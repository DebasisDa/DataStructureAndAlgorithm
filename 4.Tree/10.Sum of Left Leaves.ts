//Leetcode :404. Sum of Left Leaves


/**  1
 * Approach : DFS (Inorder, preOrder, Post order)
 * TC - O(N)
 * SC - O(N)
 */
function sumOfLeftLeaves(root: TreeNode | null): number {
    if(root == null || (root.left == null && root.right == null)) return 0;
     return helper(root, false);
 };
 
 function helper(node, isleft){
   let leftsum = 0, rightsum = 0; 
    if(node.left == null && node.right == null){
        if(isleft){
          return node.val;
        } else {
          return 0;
        }
    }
 
   if(node.left != null)
    leftsum =  helper(node.left, true);
 
    if(node.right != null)
    rightsum =  helper(node.right, false);
    return leftsum+rightsum;
 }