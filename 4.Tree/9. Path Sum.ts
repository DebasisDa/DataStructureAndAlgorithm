//Leetcode : 112. Path Sum



/**  1
 * Approach : DFS (Inorder, preOrder, Post order)
 * TC - O(N)
 * SC - O(N)
 */
function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    if(root == null) return false;
    let result = [false]
   return helper(root, null, targetSum, 0);
};

function helper(root, next, targetSum, sum){
    let left = false, right = false;
    if(root == null) {
        if(targetSum == sum && next== null)
         return true;
        else 
         return false; 
    }


    left = helper(root.left, root.right, targetSum, sum+root.val);
    
    right = helper(root.right, root.left, targetSum, sum+root.val);
    console.log(left, right);
    return left||right;
} 