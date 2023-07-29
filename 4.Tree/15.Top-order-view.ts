//Top view using DFS

/** 
 * Approach : DFS
 * TC - O(N)
 * SC - O(N)+O(H)
 */    
    
    
    //Top view using DFS
    topView (root){
        let map = {};
        topViewHelper(root, 0, map);
        console.log(map);

        function topViewHelper(root, index, map){
            if(root == null) return;
            
            if(map[index] == undefined){
                map[index] = root.val;
            }
            topViewHelper(root.left, index-1, map);
            topViewHelper(root.right, index+1, map);

        }
    }
}