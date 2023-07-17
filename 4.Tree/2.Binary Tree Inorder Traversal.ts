/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */


//Leet code : 94
/**
 * TC - O(N)
 * SC - O(N) (N is hight of tree), its recusrion space
 */
function inorderTraversal(root: TreeNode | null): number[] {
    if(root == null) return [];
    let result = [];
    helper(result, root);
    return result;
};

function helper(result, root){
   if(root == null) return;
   helper(result, root.left);
   result.push(root.val);
   helper(result, root.right);
   //return result;
}