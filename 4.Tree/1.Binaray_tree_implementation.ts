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

                if(data.left != null)
                   queu.push(data.left);
                
                if(data.right != null)   
                  queu.push(data.right);
            }
            return flag;
        }
    }
}


let bTreeObj = new bTree();
bTreeObj.addUsingRecusrion(10);
bTreeObj.addUsingRecusrion(20);
bTreeObj.addUsingRecusrion(30);
bTreeObj.addUsingRecusrion(40);
bTreeObj.addUsingRecusrion(50);
bTreeObj.addUsingRecusrion(60);
bTreeObj.addUsingRecusrion(70);

bTreeObj.preOrder();

console.log(" Search 30 : ", bTreeObj.serach(30));
console.log(" Search 300 : ", bTreeObj.serach(300));