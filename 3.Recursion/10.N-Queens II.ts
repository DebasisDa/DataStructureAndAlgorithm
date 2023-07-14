/**
 * 52. N-Queens II

 */


function totalNQueens(n: number): number  {
    let config = [];

    return helper(config, 0, n);
};


function helper(config, row, n) {
    let result = 0;
    if(row == n){
        return 1;
    }

    for(let col=0; col<n; col++){
        if(isValid(config, row, col, n)){
            config[row] = col;
            result = result + helper(config, row+1, n);
            config.pop();
        }
    }
    return result;
}

function isValid(config, row, col, n) {
    for(let colum of config){
        if(colum == col){
              return false;
        }
    }

let count = 1;
    for(let i=row-1; i>=0; i--){
        if(config[i] == col-count || config[i] == col+count){
            return false;
        }
        count++;
    }
    return true;
}
