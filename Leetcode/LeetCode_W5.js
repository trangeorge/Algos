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

// 35 Search Insert Position

var searchInsert = function (nums, target) {
    let low = 0;
    let high = nums.length;

    while (low < high) {
        let middleIndex = low + Math.floor((high - low) / 2);

        if (nums[middleIndex] === target) {
            return middleIndex;
        }

        if (target > nums[middleIndex]) {
            low = middleIndex + 1;
        } else {
            high = middleIndex;
        }
    }
    return low
};

console.log(searchInsert([1, 3, 5, 6], 5))
console.log(searchInsert([1, 3, 5, 6], 2))
console.log(searchInsert([1, 3, 5, 6], 7))