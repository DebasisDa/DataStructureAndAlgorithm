//Leetcode :572. Subtree of Another Tree


/** 
 * Approach : DFS (Inorder, preOrder, Post order)
 * TC - O(N * M)
 * SC - O(1)+ O(H + H)
 */

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
    let p = root, q = subRoot; 
    if(root == null || subRoot == null) return false;
     if(checkSameTree(root, subRoot)) return true;
     let left = isSubtree(root.left, subRoot);
     let right = isSubtree(root.right, subRoot);
      return left||right;
  }
  
  function checkSameTree (p, q){
    if(p == null && q == null ) return true; 
    if(p == null && q != null ) return false;
    if(p != null && q == null ) return false;
    if(p.val != q.val) return false;  
  
    let left = checkSameTree(p.left, q.left);
    let right = checkSameTree(p.right, q.right);
     
    return left&&right;
  }