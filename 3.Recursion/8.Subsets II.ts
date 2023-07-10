/**
 * 90. Subsets II
 */


/**
   * TC O(2^n)
   * SC O(n)
*/


function subsetsWithDup(nums: number[]): number[][] {
    nums = nums.sort((a, b) => { return a-b});
    return helper(nums, 0, [], []);
}


function helper (nums, index, bag, res){

    if(index == nums.length){
       res.push([...bag]);
        return res;
    }

    bag.push(nums[index]);
    
    helper(nums, index+1, bag, res);
    bag.pop();

    while(index+1 <= nums.length && nums[index] == nums[index+1])
       index++;
    return helper(nums, index+1, bag, res);
}