//199. Binary Tree Right Side View

/** 
 * Approach : BFS
 * TC - O(N)
 * SC - O(N)
 */   


function rightSideView(root: TreeNode | null): number[] {
    if(root == null) return [];
    let queue = [root];
    let result = [];

    while(queue.length != 0){
        let length = queue.length;

        while(length > 0){
          let node = queue.shift(); 

          if(length == 1)
            result.push(node.val);

          if(node.left != null)
             queue.push(node.left);
          if(node.right != null)
             queue.push(node.right); 

          length--;
        }
    }
    return result;
}