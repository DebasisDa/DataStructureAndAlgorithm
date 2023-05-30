function containsDuplicate2(nums) {
    nums = nums.sort(function (a, b) { return a - b; });
    for (var i = 0; i < nums.length - 1; i++) {
        if (nums[i] == nums[i + 1])
            return true;
    }
    return false;
}
;
console.log(containsDuplicate2([1, 4, 3, 4]));
