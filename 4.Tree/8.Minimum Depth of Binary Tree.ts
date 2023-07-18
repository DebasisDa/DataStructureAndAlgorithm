//Leet code : 111. Minimum Depth of Binary Tree



/**  1
 * Approach : DFS (Inorder, preOrder, Post order)
 * TC - O(N)
 * SC - O(N)
 */
function minDepth(root: TreeNode | null): number {
    if(root == null) return 0;
    
    let leftDepth = minDepth(root.left);
    let rightDepth = minDepth(root.right);

    if(leftDepth == 0) return 1+rightDepth;
    if(rightDepth == 0) return 1+leftDepth;
    return (leftDepth > rightDepth ? 1+rightDepth: 1+leftDepth);
};



/**  2
 * Approach : BFS (Queues)
 * TC - O(N)
 * SC - O(N)
 */


function minDepth(root: TreeNode | null): number {
    if(root == null) return 0;
      let obj = new Treenode(root, 1);
      return  helper( [obj]);
  };
  
  class Treenode {
    depth;
    node;
    constructor(node, depth){
      this.depth = depth;
      this.node = node
    }
  }
  
  function helper (queue){
      while(queue.length != 0){
         let onenode = queue.shift();
  
         let node = onenode.node;
         let depth = onenode.depth;
  
       if(node.left == null && node.right == null){
          return depth;
        }
         if(node.left != null){
           queue.push(new Treenode(node.left, depth+1));
         } 
          if(node.right != null){
           queue.push(new Treenode(node.right , depth+1));
         }
        
      }
  }