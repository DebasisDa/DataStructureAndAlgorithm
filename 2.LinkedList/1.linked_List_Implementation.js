var node = /** @class */ (function () {
    function node(data) {
        this.data = data;
        this.next = null;
    }
    return node;
}());
var NodeLink = /** @class */ (function () {
    function NodeLink() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    //O(1)
    NodeLink.prototype.insertLast = function (value) {
        var newNode = new node(value);
        if (this.head == null) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            this.tail = this.tail.next;
        }
        this.size++;
        return newNode;
    };
    //O(1)
    NodeLink.prototype.insertFirst = function (value) {
        var newNode = new node(value);
        if (this.head == null) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.size++;
        return newNode;
    };
    //O(n)
    NodeLink.prototype.insert = function (value, index) {
        if (index == 1) {
            this.insertFirst(value);
        }
        else if (index == this.size) {
            this.insertLast(value);
        }
        else {
            var count = 0;
            var temp = this.head, prev = this.head;
            while (count != index) {
                prev = temp;
                temp = temp.next;
                count++;
            }
            var newNode = new node(value);
            prev.next = newNode;
            newNode.next = temp;
            this.size++;
            return newNode;
        }
    };
    //O(n)
    NodeLink.prototype.removeLast = function () {
        //List empty
        if (this.head == null) {
            return -1;
        }
        //if one node in list
        else if (this.size == 1) {
            this.tail = null;
            this.head = null;
            this.size = 0;
        }
        //last node delete
        else {
            var temp = this.head;
            var prev = this.head;
            while (temp.next != null) {
                prev = temp;
                temp = temp.next;
            }
            prev.next = null;
            this.tail = prev;
        }
    };
    //O(1)
    NodeLink.prototype.removeFirst = function () {
    };
    //O(n)
    NodeLink.prototype.remove = function (value) {
    };
    //O(n)
    NodeLink.prototype.dispaly = function () {
        var list = this.head;
        console.log("Total size :: ", this.size);
        while (list != null) {
            console.log("Value : ", list.data);
            list = list.next;
        }
    };
    NodeLink.prototype.removeNthFromEnd = function (n) {
        var fast = this.head;
        var slow = this.head;
        console.log("===============startr=======================>>>>>");
        console.log(slow.data);
        for (var i = 0; i < n; i++) {
            fast = fast.next;
            console.log("==============fast1========================>>>>>");
            console.log(fast.data + " i = " + i + " n = " + n);
            console.log("==============fast1========================>>>>>");
        }
        if (!fast)
            return this.head.next;
        while (fast.next) {
            fast = fast.next;
            slow = slow.next;
            console.log("================fast2======================>>>>>");
            console.log(fast.data);
            console.log("==================fast2====================>>>>>");
            console.log("=================slow=====================>>>>>");
            console.log(slow.data);
            console.log("===================slow===================>>>>>");
        }
        slow.next = slow.next.next;
        return this.head;
    };
    ;
    return NodeLink;
}());
var obj = new NodeLink();
obj.insertLast(10);
obj.insertLast(20);
obj.insertLast(30);
obj.insertLast(40);
obj.insertLast(50);
obj.insertLast(60);
// obj.insertFirst(400);
// obj.insert(300, 4);
obj.dispaly();
// obj.removeLast();
//obj.dispaly();
obj.removeNthFromEnd(2);
console.log("==============================>");
obj.dispaly();
