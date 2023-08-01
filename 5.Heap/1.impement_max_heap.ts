class Heap {
    arr : number[];
    size: number;

    constructor(){
        this.arr = [];
        this.size = -1;
    }

    display(){
        for(let value of this.arr){
            console.log("Value ::: ", value);
        }
    }

    add(value: number){
        this.size ++;
      this.arr[ this.size ] = value; 
      this.perculateUp();
    }

    perculateUp(){
        let index = this.size;
        let parentIndex =  Math.floor((this.size - 1)/2);
        let indexvalue = this.arr[index];

        while(parentIndex != 0){
            let parentvalue = this.arr[parentIndex];
            if(parentIndex >= indexvalue) return;
            
            let temp = parentvalue;
            this.arr[parentIndex] = indexvalue;
            this.arr[index] = temp;

            index = parentIndex;
            indexvalue = parentvalue;
            parentIndex = parentIndex =  Math.floor((this.size - 1)/2);
        }
    }
}


//
let heapObj = new Heap();
heapObj.add(10);
heapObj.add(20);
heapObj.add(30);

heapObj.display();