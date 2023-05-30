function twoSum2(nums: number[], target: number): number[] {
   let sum={};
   for(let i=0; i<nums.length; i++){
      let value = target-nums[i];
      if(sum[value] >= 0){
         return [sum[value], i];
      } else {
         sum[nums[i]] =  i;
      }
   }
   return [];
}

console.log(twoSum2([2,7,11,15], 9));