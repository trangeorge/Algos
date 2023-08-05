// 961 N-Repeated Element in Size 2N Array

// You are given an integer array nums with the following properties:

// nums.length == 2 * n.
// nums contains n + 1 unique elements.
// Exactly one element of nums is repeated n times.
// Return the element that is repeated n times.



// Example 1:

// Input: nums = [1,2,3,3]
// Output: 3
// Example 2:

// Input: nums = [2,1,2,5,3,2]
// Output: 2
// Example 3:

// Input: nums = [5,1,5,2,5,3,5,4]
// Output: 5

var repeatedNTimes = function (nums) {
    nums.sort(function (a, b) { return a - b });

    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] == nums[i + 1]) {
            return nums[i];
        }
    }
};

console.log(repeatedNTimes([1, 2, 3, 3]))
console.log(repeatedNTimes([2, 1, 2, 5, 3, 2]))
console.log(repeatedNTimes([5, 1, 5, 2, 5, 3, 5, 4]))

// 896 Monotonic Array

// An array is monotonic if it is either monotone increasing or monotone decreasing.

// An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j]. An array nums is monotone decreasing if for all i <= j, nums[i] >= nums[j].

// Given an integer array nums, return true if the given array is monotonic, or false otherwise.



// Example 1:

// Input: nums = [1,2,2,3]
// Output: true
// Example 2:

// Input: nums = [6,5,4,4]
// Output: true
// Example 3:

// Input: nums = [1,3,2]
// Output: false


var isMonotonic = function (nums) {
    var increasing = true;
    var decreasing = true;

    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] > nums[i + 1]) {
            decreasing = false;
        } else if (nums[i] < nums[i + 1]) {
            increasing = false;
        }
    }
    return increasing || decreasing
};

console.log(isMonotonic([1, 2, 2, 3]))
console.log(isMonotonic([6, 5, 4, 4]))
console.log(isMonotonic([1, 3, 2]))

// 2540 Minimum Common Value

// Given two integer arrays nums1 and nums2, sorted in non-decreasing order, return the minimum integer common to both arrays. If there is no common integer amongst nums1 and nums2, return -1.

// Note that an integer is said to be common to nums1 and nums2 if both arrays have at least one occurrence of that integer.



// Example 1:

// Input: nums1 = [1,2,3], nums2 = [2,4]
// Output: 2
// Explanation: The smallest element common to both arrays is 2, so we return 2.
// Example 2:

// Input: nums1 = [1,2,3,6], nums2 = [2,3,4,5]
// Output: 2
// Explanation: There are two common elements in the array 2 and 3 out of which 2 is the smallest, so 2 is returned.

var getCommon = function (nums1, nums2) {

    let i = 0, j = 0;
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] === nums2[j]) {
            return nums1[i];
        } else if (nums1[i] < nums2[j]) {
            i++;
        } else {
            j++;
        }
    }
    return -1;
};

// rest day c: and another aha

