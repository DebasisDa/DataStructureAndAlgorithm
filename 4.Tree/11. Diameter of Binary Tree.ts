//Leetcode :543. Diameter of Binary Tree

/** 
 * Approach : DFS (Inorder, preOrder, Post order)
 * TC - O(N)
 * SC - O(1)+ O(H)
 */


function diameterOfBinaryTree(root: TreeNode | null): number {
  
    let arr = [];
    helper(root, arr);
    return arr[1];
  };
  
  function helper(root, arr){
      let left=0, right=0;
  
       if(root == null){
           return 0;   
       }
  
      left = helper(root.left, arr);
      right = helper(root.right, arr); 
  
      arr[0] = 1+ max(left, right);
      arr[1] = max( arr[1],left+right);
  
      return arr[0];
  }
  
  function max (left, right){
      if(left > right ) return left;
      return right;
  }