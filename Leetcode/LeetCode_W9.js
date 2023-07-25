// 628 Maximum Product of Three Numbers

// Given an integer array nums, find three numbers whose product is maximum and return the maximum product.



// Example 1:

// Input: nums = [1,2,3]
// Output: 6
// Example 2:

// Input: nums = [1,2,3,4]
// Output: 24
// Example 3:

// Input: nums = [-1,-2,-3]
// Output: -6


var maximumProduct = function (nums) {
    nums.sort((a, b) => a - b)

    var lastNumber = nums.length - 1
    var midNumber = nums.length - 2
    var firstNumber = nums.length - 3
    var total = nums[lastNumber] * nums[midNumber] * nums[firstNumber]
    return total

};

console.log(maximumProduct([1, 2, 3]))
console.log(maximumProduct([1, 2, 3, 4]))
console.log(maximumProduct([-1, -2, -3]))




// 674 Longest Continuous Increasing Subsequence




// Given an unsorted array of integers nums, return the length of the longest continuous increasing subsequence (i.e. subarray). The subsequence must be strictly increasing.

// A continuous increasing subsequence is defined by two indices l and r (l < r) such that it is [nums[l], nums[l + 1], ..., nums[r - 1], nums[r]] and for each l <= i < r, nums[i] < nums[i + 1].


// Example 1:

// Input: nums = [1,3,5,4,7]
// Output: 3
// Explanation: The longest continuous increasing subsequence is [1,3,5] with length 3.
// Even though [1,3,5,7] is an increasing subsequence, it is not continuous as elements 5 and 7 are separated by element
// 4.


// Example 2:

// Input: nums = [2,2,2,2,2]
// Output: 1
// Explanation: The longest continuous increasing subsequence is [2] with length 1. Note that it must be strictly
// increasing.

var findLengthOfLCIS = function (nums) {
    let count = 1;
    let max = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] < nums[i]) {
            count++;
        } else {
            count = 1;
        }
        max = Math.max(max, count);
    }
    return max;
};

console.log(findLengthOfLCIS([1, 3, 5, 4, 7]))
console.log(findLengthOfLCIS([2, 2, 2, 2, 2]))