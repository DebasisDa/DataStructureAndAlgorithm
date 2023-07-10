/**
 * Leetcode : 22. Generate Parentheses
 */

/**
   * TC O(2^n)
   * SC O(n)
   */


function generateParenthesis(n: number): string[] {
    let str = [];
     helper(n, n, str, '');
     return str;
};


function helper (open, close, str, sym){
  if(open == 0 && close == 0){
      str.push(sym);
      return;
  }

  if(open > close || open <0) return;
   helper(open-1, close, str, sym+'(');
   helper(open, close-1, str, sym+')');

}