/**
 * 46. Permutations
 */


/**
   * TC O(n*n!)
   * SC O(n)
   */


function permute(nums: number[]): number[][] {
    let result : number[][] = [];
    helper(nums, result, 0, nums.length-1);
    return result;

};

function helper(nums, result, start, end){
    if(start == end){
        result.push([...nums]);
        return;
    }

    let swap, i;
    for(i=start; i<=end; i=i+1){
        swap=nums[start];
        nums[start] = nums[i];
        nums[i] = swap;

        helper(nums, result, start+1, end);

        swap=nums[start];
        nums[start] = nums[i];
        nums[i] = swap;
    }
}