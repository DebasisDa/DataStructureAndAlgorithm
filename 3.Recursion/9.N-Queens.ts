/**
 * 51. N-Queens

 */

function solveNQueens(n: number): string[][] {
    let config = [], result = [];

    helper(config, result, 0, n);
    return result;
};


function helper(config, result, row, n) {
    if(row == n){
        result.push([...generateBoard(config)]);
        return result;
    }

    for(let col=0; col<n; col++){
        if(isValid(config, row, col, n)){
            config[row] = col;
            helper(config, result, row+1, n);
            config.pop();
        }
    }
}

function generateBoard(config) {
    let board = [];

    for(let i=0; i<config.length; i++){
        let value="";
        for(let j=0; j<config.length; j++){
         if( j == config[i]){
             value = value+"Q";
         } else {
          value = value+".";
         }
        }
        board.push(value);
    }
    return board;
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