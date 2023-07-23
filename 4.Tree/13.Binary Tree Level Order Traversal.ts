//Leetcode :102. Subtree of Another Tree


/** 
 * Approach : BFS
 * TC - O(N)
 * SC - O(N)
 */

function levelOrder(root: TreeNode | null): number[][] {
    if(root == null) return [];
    let queue = [root];
    let result = [];

    while(queue.length != 0){
        let subResult = [];
        let length = queue.length;

        while(length > 0){
          let node = queue.shift(); 
          subResult.push(node.val);

          if(node.left != null)
             queue.push(node.left);
          if(node.right != null)
             queue.push(node.right); 

          length--;
        }
        result.push(subResult);
    }
    return result;
}