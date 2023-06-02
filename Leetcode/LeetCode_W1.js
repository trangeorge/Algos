// 643. Maximum Average Subarray

function findMaxAverage(nums, k) {
    var sum = 0;

    for (let i = 0; i < k; i++) {
        sum += nums[i];
    }

    let maxAverage = sum / k;

    for (let i = k; i < nums.length; i++) {
        sum += nums[i] - nums[i - k];
        maxAverage = Math.max(maxAverage, sum / k);
    }

    return maxAverage;
}

// console.log(findMaxAverage([1, 2, 4, 6], 2));

// 645. Set Mismatch 

var findErrorNums = function (nums) {
    var arr = []
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != nums[i + 1]) {
            continue;
        } else {
            arr.push(nums[i], nums[i] + 1)
        }
    }
    return arr
};

// console.log(findErrorNums([1, 2, 3, 4, 5, 5, 7]))

// 1523. Count Odd Numbers in an Interval Range

function countOdds(low, high) {
    var counter = 0;
    for (i = low; i <= high; i++) {
        if (i % 2 != 0) {
            counter++;
        }
    }
    return counter
}

var result = countOdds(4, 9)
console.log(result)