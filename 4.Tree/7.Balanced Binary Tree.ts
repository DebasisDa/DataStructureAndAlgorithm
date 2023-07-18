//Leetcode : 110. Balanced Binary Tree


/**  1
 * Approach : DFS (Inorder, preOrder, Post order)
 * TC - O(N)
 * SC - O(N)
 */



function isBalanced(root: TreeNode | null): boolean {
    if(root == null) return true;
   let  result = helper(root);
   return result[0];
};

function helper(root){
    if(root == null) return [true, 0];

    let left =  helper(root.left);
    let right =  helper(root.right);

    let balanced =  (left[1] >= right[1])?
       left[1] - right[1]: right[1] - left[1];
        return [left[0] && right[0]&&(balanced < 2)
        , (left[1] > right[1]) ? 1+left[1]: 1+right[1]];
}