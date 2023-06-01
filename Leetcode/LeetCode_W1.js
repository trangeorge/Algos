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

console.log(findMaxAverage([1, 2, 4, 6], 2));