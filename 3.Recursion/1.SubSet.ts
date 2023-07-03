//Lettcode :https://leetcode.com/problems/subsets/

/**
 * Given an integer array nums of unique elements, return all possible subsets
 (the power set).
  The solution set must not contain duplicate subsets. Return the solution in any order.
 */


  /**
   * TC O(2^n)
   * SC O(2^n)
   */

  function subsets(nums: number[]): number[][]{
    return helper(nums, 0, [], []);
}


function helper (nums, index, bag, res){

    if(index == nums.length){
       res.push([...bag]);
        return res;
    }

    bag.push(nums[index]);
    index = index+1;
    helper(nums, index, bag, res);
    bag.pop();
    return helper(nums, index, bag, res);
}