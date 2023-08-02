/**
 * Create Min heap
 * Add last
 * Remove first
 * Display
 */

class PriorityQueue {
    arr: [];
    size: number;

    constructor() {
        this.arr = [];
        this.size = -1;
    }

    display() {
        for (let i = 0; i <= this.size; i++) {
            console.log("Value ::: ", this.arr[i]);
        }
    }

    //Add always last
    add(value: number) {
        this.size++;
        this.arr[this.size] = value;
        this.perculateUp();
    }


    perculateUp() {
        let index = this.size;

        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            let indexvalue = this.arr[index];
            let parentvalue = this.arr[parentIndex];

            if (parentvalue.priority <= this.arr[index]) return;

            let temp = parentvalue;
            this.arr[parentIndex] = indexvalue;
            this.arr[index] = temp;
            index = parentIndex;
        }
    }


    //Remove always first
    remove() {
        if (this.size == -1) return -1;
        if (this.size == 0) {
            this.size--;
            return this.arr[0];
        }

        let min = this.arr[0];
        this.arr[0] = this.arr[this.size];
        this.size--;
        this.perculateDown();
        return min;
    }


    perculateDown() {
        let index = 0;

        while (index < this.size) {
            let leftChile = (index * 2) + 1;
            let rightChile = (index * 2) + 2;
            let child;

            if (leftChile <= this.size && this.arr[index] > this.arr[leftChile]
                && this.arr[leftChile] < this.arr[rightChile]) {
                    child = leftChile;
            } else if (rightChile <= this.size && this.arr[index] > this.arr[rightChile]) {
                child = rightChile;
            } else return;

            let temp = this.arr[index];
            this.arr[index] = this.arr[child];
            this.arr[child] = temp;
            index = child;
        }
    }
}


let heapObj = new PriorityQueue();
heapObj.add({priority: 10, name: "Fever"});
heapObj.add( {priority: 12, name: "Headache"});
heapObj.add({priority: 1, name: "Accident"});
heapObj.add({priority: 5, name: "Hand fracture"});

heapObj.display();
console.log("Remove ::: ", heapObj.remove());
heapObj.display();