/**
 * Leetcode: 50. Pow(x, n)
 */

/**
   * TC O(logn)
   * SC O(logn)
*/


function myPow(x: number, n: number): number {
    if(n == 0) return 1;
    else if(Math.floor(n/2) == 0){
        return myPow(x, Math.floor(n/2)) * myPow(x, Math.floor(n/2));
    } else {
        return x*myPow(x, Math.floor(n/2)) * myPow(x, Math.floor(n/2));
    }
};