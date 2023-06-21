/**
 * Leetcode - 143
 */


/**
 * TC - O(N)
 * SC - O(1)
 */


class node2 {
    data: number;
    next;

    constructor(data) {
        this.data = data;
        this.next = null;
    }
}


class NodeLink2 {
    head;
    tail;
    size: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    //O(1)
    insertLast(value) {
        let newNode = new node2(value);

        if (this.head == null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = this.tail.next;
        }
        this.size++;
        return newNode;
    }


    //O(n)
    dispaly() {
        let list = this.head;
        console.log("Total size :: ", this.size);

        while (list != null) {
            console.log("Value : ", list.data);
            list = list.next;
        }
    }


    reorderList() {

        //find middle node
        let slow = this.head, fast = this.head,
            prev = null, next = null, slowPrev;

        while (slow != null && fast != null) {
            fast = fast.next;
            if (fast != null) {
                fast = fast.next;
            }
            slowPrev = slow;
            slow = slow.next;
        }

        slowPrev.next = null;
        console.log("slow.value :: ", slow.data);

        //Second list in reverse order
        while (slow != null) {
            next = slow.next;
            slow.next = prev;
            prev = slow;
            slow = next;
        }
        slow = prev;

        // while(slow != null){
        //     console.log("Valu :: ", slow.data);
        //     slow = slow.next;
        // }

        let temp = this.head, flag = false, resultList = temp;
        temp = temp.next;
        let result = resultList;

        while (temp != null && slow != null) {
            if (flag) {
                resultList.next = temp;
                resultList = resultList.next;
                temp = temp.next;
                flag = !flag;
            } else {
                resultList.next = slow;
                resultList = resultList.next;
                slow = slow.next;
                flag = !flag;
            }
        }

        while (temp != null) {
            console.log(temp.data);
            resultList.next = temp;
            resultList = resultList.next;
            temp = temp.next;
        }

        while (slow != null) {
            resultList.next = slow;
            resultList = resultList.next;
            slow = slow.next;
        }

        while (result != null) {
            console.log("Valu Valu  Valu  :: ", result.data);
            result = result.next;
        }
    }
}


let obj2 = new NodeLink2();
obj2.insertLast(10);
obj2.insertLast(20);
obj2.insertLast(30);
obj2.insertLast(40);
obj2.insertLast(50);
obj2.insertLast(60);
obj2.insertLast(70);
obj2.insertLast(80);
obj2.insertLast(90);
obj2.reorderList();
obj2.dispaly();
//   obj2.reorderList();
