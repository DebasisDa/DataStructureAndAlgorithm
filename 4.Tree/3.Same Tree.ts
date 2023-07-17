//Leet code 100. Same Tree


/**  1
 * Approach : DFS (Inorder, preOrder, Post order)
 * TC - O(N)
 * SC - O(N)
 */
function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    return helper(p,q);  
};

function helper(p, q){
    if((p != null && q== null)||(p==null && q != null)) return false;
    if(p == null && q == null) return true;

    let left = helper(p.left, q.left);
    let right = helper(p.right, q.right);
        if(p.val != q.val) return false;
    return left&&right;
}



/**  2
 * Approach : BFS (Two queues)
 * TC - O(N)
 * SC - O(N)
 */

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    if(p == null && q== null) return true;
      if(p == null || q== null) return false;
    return helper([p],[q]);  
};

function helper(p, q){
    let flag = true;
    while(p.length != 0 && q.length != 0){
        let pNode = p.shift();
        let qNode = q.shift();

              
        if(qNode.val != pNode.val) {
          flag = false;
          break;
        }

       if((pNode.left != null && qNode.left == null)
            ||(pNode.left == null && qNode.left != null)){
            flag = false;
            break;
        }

     if((pNode.right != null && qNode.right == null)
            ||(pNode.right == null && qNode.right != null)){
            flag = false;
            break;
        }

       if(pNode.left != null && qNode.left != null){
        p.push(pNode.left);
        q.push(qNode.left);
       }

       if(pNode.right != null && qNode.right != null){ 
        p.push(pNode.right);
        q.push(qNode.right);
     }
    }
    return flag;
}