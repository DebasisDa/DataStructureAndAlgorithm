class node {
  data: number;
  next;

  constructor(data) {
    this.data = data;
    this.next = null;
  }
}


class NodeLink {
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
    let newNode = new node(value);

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

  //O(1)
  insertFirst(value) {
    let newNode = new node(value);

    if (this.head == null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.size++;
    return newNode;
  }

  //O(n)
  insert(value, index) {

    if (index == 1) {
      this.insertFirst(value);
    }

    else if (index == this.size) {
      this.insertLast(value);
    }

    else {
      let count = 0;
      let temp = this.head, prev = this.head;

      while (count != index) {
        prev = temp;
        temp = temp.next;
        count++;
      }

      let newNode = new node(value);
      prev.next = newNode;
      newNode.next = temp;
      this.size++;
      return newNode;
    }
  }

  //O(n)
  removeLast() {

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
      let temp = this.head;
      let prev = this.head;

      while(temp.next != null){
        prev = temp;
        temp = temp.next;
      }

      prev.next = null;
      this.tail = prev;
    }
  }

  
  //O(1)
  removeFirst() {
     
  }


   //O(n)
   remove(value) {
     
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


 removeNthFromEnd(n: number) {
    let fast = this.head
         let slow = this.head
         console.log("===============startr=======================>>>>>");
         console.log(slow.data);
  
         for(let i=0;i<n;i++){
             fast = fast.next;
             console.log("==============fast1========================>>>>>");
             console.log(fast.data +" i = "+i+" n = "+n);
             console.log("==============fast1========================>>>>>");
         }
  
         if(!fast)
             return this.head.next
  
         while(fast.next){
             fast = fast.next
             slow = slow.next
             console.log("================fast2======================>>>>>");
             console.log(fast.data);
             console.log("==================fast2====================>>>>>");
             console.log("=================slow=====================>>>>>");
             console.log(slow.data);
             console.log("===================slow===================>>>>>");
         }
  
         slow.next = slow.next.next
         return this.head
 };
}


let obj = new NodeLink();
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


