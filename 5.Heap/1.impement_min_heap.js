var Heap = /** @class */ (function () {
    function Heap() {
        this.arr = [];
        this.size = -1;
    }
    Heap.prototype.display = function () {
        for (var i = 0; i <= this.size; i++) {
            console.log("Value ::: ", this.arr[i]);
        }
    };
    //Add always last
    Heap.prototype.add = function (value) {
        this.size++;
        this.arr[this.size] = value;
        this.perculateUp();
    };
    Heap.prototype.perculateUp = function () {
        var index = this.size;
        while (index > 0) {
            var parentIndex = Math.floor((index - 1) / 2);
            var indexvalue = this.arr[index];
            var parentvalue = this.arr[parentIndex];
            if (parentvalue <= this.arr[index])
                return;
            var temp = parentvalue;
            this.arr[parentIndex] = indexvalue;
            this.arr[index] = temp;
            index = parentIndex;
        }
    };
    //Remove always first
    Heap.prototype.remove = function () {
        if (this.size == -1)
            return -1;
        if (this.size == 0) {
            this.size--;
            return this.arr[0];
        }
        var min = this.arr[0];
        this.arr[0] = this.arr[this.size];
        this.size--;
        this.perculateDown();
        return min;
    };
    Heap.prototype.perculateDown = function () {
        var index = 0;
        while (index < this.size) {
            var leftChile = (index * 2) + 1;
            var rightChile = (index * 2) + 2;
            var child = void 0;
            if (leftChile <= this.size && this.arr[index] > this.arr[leftChile]
                && this.arr[leftChile] < this.arr[rightChile]) {
                child = leftChile;
            }
            else if (rightChile <= this.size && this.arr[index] > this.arr[rightChile]) {
                child = rightChile;
            }
            else
                return;
            var temp = this.arr[index];
            this.arr[index] = this.arr[child];
            this.arr[child] = temp;
            index = child;
        }
    };
    return Heap;
}());
//
var heapObj = new Heap();
heapObj.add(3);
heapObj.add(5);
heapObj.add(9);
heapObj.add(6);
heapObj.add(8);
heapObj.add(20);
heapObj.add(10);
heapObj.add(12);
heapObj.add(19);
heapObj.add(18);
heapObj.add(2);
heapObj.display();
console.log("Remove ::: ", heapObj.remove());
heapObj.display();
