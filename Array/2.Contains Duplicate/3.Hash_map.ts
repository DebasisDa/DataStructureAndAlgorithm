function containsDuplicate3(nums: number[]): boolean {
    let map = {};
     for(let i=0; i<nums.length; i++){
           if(map[nums[i]] >= 0){
            return true;
           } else {
            map[nums[i]] = i;
           }
     }
     return false;
    };
 
    console.log(containsDuplicate3([1,4,3,5]));