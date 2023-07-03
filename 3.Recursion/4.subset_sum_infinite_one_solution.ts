/**
 *  Input : [1,2,3],  sum = 3
 * 
 * Output : [ [1,1,1]]
 */

  /**
   * TC O(2^n)
   * SC O(n)
   */


function subsets(nums: number[], sum): number[][]{
    return helper(nums, 0, [], [], sum, 0);
}


function helper (nums, index, bag, res, sum, tempSum){

    if(res.length >= 1) return res;  //Need one solution

    if(tempSum > sum) return;

    if(index == nums.length){
        if(sum == tempSum){
          res.push([...bag]);
        }
        return res;
    }

     if(sum == tempSum){
          res.push([...bag]);
          return res;
        }


    bag.push(nums[index]);

    helper(nums, index, bag, res, sum, tempSum+nums[index]);
    bag.pop();
    return helper(nums, index+1, bag, res, sum, tempSum);
}

console.log(subsets([1,2,3], 3));