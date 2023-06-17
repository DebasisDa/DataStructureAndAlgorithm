class node {
    data : number;
    next;

    constructor(data){
        this.data = data;
        this.next = null;
    }
}


class NodeLink {
    head;
    tail;

    constructor(){
        this.head = null;
        this.tail = null;
    }

    insertLast (value){
      let newNode = new node(value);

      if( this.head == null){
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        this.tail = this.tail.next;
      }
    }

    dispaly() {
        let list = this.head;

        while(list != null){
            console.log("Value : ", list.data);
            list = list.next;
        }
    }
}


let obj = new NodeLink();
obj.insertLast(10);
obj.insertLast(20);
obj.insertLast(30);
obj.insertLast(40);
obj.dispaly();


