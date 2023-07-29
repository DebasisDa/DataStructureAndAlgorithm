//Create Node
class BNode {
    val;
    left;
    right;
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

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

//Create binary tree
class bTree {
    root;

    constructor() {
        this.root = null;
    }

    //Add item, BFS
    add(value) {
        let node = new BNode(value);

        if (this.root == null) {
            this.root = node;
            return;
        }
        let queue = [this.root];

        while (true) {
            let data = queue.shift();
            if (data.left == null) {
                data.left = node;
                return;
            } else if (data.right == null) {
                data.right = node;
                return;
            } else {
                queue.push(data.left);
                queue.push(data.right);
            }
        }
    }

    //add item using recurion, BFS
    addUsingRecusrion(value) {
        let node = new BNode(value);

        if (this.root == null) {
            this.root = node;
            return;
        }

        return helper(node, [this.root]);

        function helper(node, queue) {
            let data = queue.shift();
            if (data.left == null) {
                data.left = node;
                return;
            } else if (data.right == null) {
                data.right = node;
                return;
            } else {
                queue.push(data.left);
                queue.push(data.right);
                helper(node, queue);
            }
        }
    }

    //PreOrder traversal: DFS
    preOrder() {
        preeOrderHelper(this.root);

        function preeOrderHelper(root) {
            if (root == null) {
                return;
            }
            console.log("Value ::: ", root.val);
            preeOrderHelper(root.left);
            preeOrderHelper(root.right);
        }
    }

    //InOrder traversal: DFS
    InOrder() {
        InOrderHelper(this.root);

        function InOrderHelper(root) {
            if (root == null) {
                return;
            }
            InOrderHelper(root.left);
            console.log("Value ::: ", root.val);
            InOrderHelper(root.right);
        }
    }

    //PostOrder traversal: DFS
    postOrder() {
        postOrderHelper(this.root);

        function postOrderHelper(root) {
            if (root == null) {
                return;
            }
            postOrderHelper(root.left);
            postOrderHelper(root.right);
            console.log("Value ::: ", root.val);
        }
    }

    //Search in binary tree, BFS
    serach(value) {
        return helperSearch(value, [this.root]);

        function helperSearch(value, queu) {
            let flag = false;
            while (queu.length != 0) {
                let data = queu.shift();
                if (data.val == value) {
                    flag = true;
                    break;
                }

                if (data.left != null)
                    queu.push(data.left);

                if (data.right != null)
                    queu.push(data.right);
            }
            return flag;
        }
    }

    //Top view using DFS
    topView() {
        let map = {};
        topViewHelper(this.root, 0, map);
        console.log(map);

        function topViewHelper(root, index, map) {
            if (root == null) return;

            if (map[index] == undefined) {
                map[index] = root.val;
            }
            topViewHelper(root.left, index - 1, map);
            topViewHelper(root.right, index + 1, map);

        }
    }

    //Vartical view using DFS
    varticalView() {
        let mapObj = new Map<number, number[]>();
        let arr = [];

        let queue = [new queueClass(this.root, 0, 0)];
        let min = Number.MAX_SAFE_INTEGER, max = Number.MIN_SAFE_INTEGER;

        while (queue.length != 0) {
            let length = queue.length;
            let last = undefined;

            while (length > 0) {
                let n = queue.shift();
                console.log("n ::: ", n?.node?.val);

                if (!mapObj.has(n?.index)) {
                    mapObj.set(n?.index, [n?.node.val]);
                    if(min > n?.index) min = n?.index;
                    if(max < n?.index) max = n?.index;
                } else {
                    let arr = mapObj.get(n?.index);
                    arr.push(n?.node.val);

                    if(last != undefined && last?.level == n?.level && last?.index == n?.index){
                        arr = arr?.sort();
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
}


let bTreeObj = new bTree();
bTreeObj.add(3);
bTreeObj.add(9);
bTreeObj.add(20);
bTreeObj.add(10);
bTreeObj.add(8);
bTreeObj.add(15);
bTreeObj.add(7);

//bTreeObj.InOrder();
console.log(bTreeObj.varticalView());

// console.log(" Search 30 : ", bTreeObj.serach(30));
// console.log(" Search 300 : ", bTreeObj.serach(300));