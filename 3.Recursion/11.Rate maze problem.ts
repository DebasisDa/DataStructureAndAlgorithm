function helper(arr, row, col, n, res, str){
    if(arr[row][col] == 0 || col>=n || row>= n)
          return;

        if(row==n-1 && col == n-1){
            res.push(str);
            return;
        }
   

    if(row+1<n && arr[row+1][col] == 1)
        helper(arr, row+1, col, n, res, str+"D");

     if(col+1<n && arr[row][col+1] == 1)
        helper(arr, row, col+1, n, res, str+"R");
   
}

let arr = [
    [1, 0, 0, 0],
    [1, 1, 0, 1],
    [1,1,0,0],
    [0,1,1,1]
];

let arr2 = [
    [1, 0],
    [1, 0]
]

let res = [];
helper(arr2, 0, 0, 2, res, "");
console.log("Result ::: ", res);
