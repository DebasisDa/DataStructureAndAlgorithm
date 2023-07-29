
class queueClass {
    node;
    level;
    index;
    constructor(node, level, index) {
        this.node = node;
        this.level = level;
        this.index = index;
    }
}

function verticalTraversal(root: TreeNode | null): number[][] {
        if(root == null) return [];
        if(root.left == null && root.right == null) return [[root.val]];
        let mapObj = new Map<number, number[]>();
        let arr = [];

        let queue = [new queueClass(root, 0, 0)];
        let min = Number.MAX_SAFE_INTEGER, max = Number.MIN_SAFE_INTEGER;

        while (queue.length != 0) {
            let length = queue.length;
            let last = undefined;

            while (length > 0) {
                let n = queue.shift();
                if (!mapObj.has(n?.index)) {
                    mapObj.set(n?.index, [n?.node?.val]);
                    if(min > n?.index) min = n?.index;
                    if(max < n?.index) max = n?.index;
                } else {
                    let arr = mapObj.get(n?.index);
                    if(last != undefined && last?.level == n?.level && last?.index == n?.index){
                        if(last?.node.val > n?.node?.val){
                          arr.pop();
                          arr.push(n?.node?.val);
                          arr.push(last?.node?.val);
                        } else {
                          arr.push(n?.node?.val);
                        }
                    } else {
                        arr.push(n?.node?.val);
                    }
                    mapObj.set(n?.index, arr);
                }

                if (n?.node?.left != null)
                    queue.push(new queueClass(n?.node?.left, n?.level + 1, n?.index - 1))

                if (n?.node?.right != null)
                    queue.push(new queueClass(n?.node?.right, n?.level + 1, n?.index + 1))
                last = n;   
                length--;
            }

        }

        for(let i = min; i<= max; i++){
            arr.push(mapObj.get(i));
        }
       return arr;
}