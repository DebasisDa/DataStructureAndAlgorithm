function twoSum2(nums, target) {
    var sum = {};
    for (var i = 0; i < nums.length; i++) {
        var value = target - nums[i];
        console.log("Map ::: ", sum, value);
        console.log(sum[value]);
        if (sum[value] >= 0) {
            return [sum[value], i];
        }
        else {
            sum[nums[i]] = i;
        }
    }
    return [];
}
console.log(twoSum2([2, 7, 11, 15], 9));
