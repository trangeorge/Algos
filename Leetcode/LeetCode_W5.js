// 645 Set Mismatch


var findErrorNums = function (nums) {
    let result = [];

    nums = nums.sort()
    for (let i = 1; i <= nums.length; i++) {
        if (nums[i - 1] == nums[i]) result[0] = nums[i]
        if (nums.indexOf(i) == -1) result[1] = i;
    }
    return result
};

console.log(findErrorNums([1, 2, 2, 4]))
console.log(findErrorNums([1, 1]))