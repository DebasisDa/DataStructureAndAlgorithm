var Heap = /** @class */ (function () {
    function Heap() {
        this.arr = [];
        this.size = -1;
    }
    Heap.prototype.display = function () {
        for (var _i = 0, _a = this.arr; _i < _a.length; _i++) {
            var value = _a[_i];
            console.log("Value ::: ", value);
        }
    };
    Heap.prototype.add = function (value) {
        this.size++;
        this.arr[this.size] = value;
        this.perculateUp();
    };
    Heap.prototype.perculateUp = function () {
        var index = this.size;
        var parentIndex = Math.floor((this.size - 1) / 2);
        var indexvalue = this.arr[index];
        while (parentIndex != 0) {
            var parentvalue = this.arr[parentIndex];
            if (parentIndex >= indexvalue)
                return;
            var temp = parentvalue;
            this.arr[parentIndex] = indexvalue;
            this.arr[index] = temp;
            index = parentIndex;
            indexvalue = parentvalue;
            parentIndex = parentIndex = Math.floor((this.size - 1) / 2);
        }
    };
    return Heap;
}());
//
var heapObj = new Heap();
heapObj.add(10);
heapObj.add(20);
heapObj.add(30);
heapObj.display();
