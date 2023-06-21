function containsDuplicate1(nums) {
    for (var i = 0; i < nums.length - 1; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            if (nums[i] == nums[j])
                return true;
        }
    }
    return false;
}

console.log(containsDuplicate1([1, 2, 3, 4]));
