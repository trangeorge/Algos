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
    let sorted = nums.sort((a, b) => a - b)
    let res1 = sorted[0] * sorted[1] * sorted[nums.length - 1]
    let res2 = sorted[nums.length - 1] * sorted[nums.length - 2] * sorted[nums.length - 3]
    return Math.max(res1, res2);
};
console.log(maximumProduct([1, 2, 3]))
console.log(maximumProduct([1, 2, 3, 4]))
console.log(maximumProduct([-1, -2, -3]))
console.log(maximumProduct([-100, -98, -1, 2, 3, 4]))




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

// 125 Valid Palindrome 


// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.



// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.



var isPalindrome = function (s) {
    //^a-z0-9 represents that we must find all alphanumeric char and remove it.
    //gi represents: g=finds all matches ; i=checks case sensitivity
    //.toLowerCase() converts all uppercase letters to lowercase letters.
    let newStr = s.replace(/[^a-z0-9]/gi, "").toLowerCase();

    //if we reverse the string and it's equal to the newstr then we return true
    //if not, then we return false.
    return newStr.split("").reverse().join("") === newStr;
};

