//Leet code 100. Same Tree


/**  1
 * Approach : DFS (Inorder, preOrder, Post order)
 * TC - O(N)
 * SC - O(N)
 */
function isSymmetric(root: TreeNode | null): boolean { 
    return helper(root.left, root.right);  
};


function helper(p, q){
 if((p != null && q== null)||(p==null && q != null)) return false;
 if(p == null && q == null) return true;
 let left = helper(p.left, q.right);
 let right = helper(p.right, q.left);
     if(p.val != q.val) return false;
 return left&&right;
}



/**  2
 * Approach : BFS (Two queues)
 * TC - O(N)
 * SC - O(N)
 */


function isSymmetric(root: TreeNode | null): boolean { 
    if(root.left == null && root.right == null) return true;
    if(root.left == null || root.right == null) return false;
    return helper([root.left],[root.right]);  
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

       if((pNode.left != null && qNode.right == null)
            ||(pNode.left == null && qNode.right != null)){
            flag = false;
            break;
        }

     if((pNode.right != null && qNode.left == null)
            ||(pNode.right == null && qNode.left != null)){
            flag = false;
            break;
        }

       if(pNode.left != null && qNode.right != null){
        p.push(pNode.left);
        q.push(qNode.right);
       }

       if(pNode.right != null && qNode.left != null){ 
        p.push(pNode.right);
        q.push(qNode.left);
     }
    }
    return flag;
}