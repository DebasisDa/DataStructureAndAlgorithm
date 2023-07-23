//Leetcode :103. Binary Tree Zigzag Level Order Traversal

/** 
 * Approach : BFS
 * TC - O(N)
 * SC - O(N)
 */

function zigzagLevelOrder(root: TreeNode | null): number[][] {
    if(root == null) return [];
    let queue = [root];
    let result = [];
    let isFromRight = false

    while(queue.length != 0){
        let subResult = [];
        let length = queue.length;
        isFromRight = !isFromRight;

        while(length > 0){
          let node;
             node = queue.shift();   
          if(isFromRight)   
            subResult.push(node.val);
          else 
            subResult.unshift(node.val);  

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