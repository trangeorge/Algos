// 1046 Last Stone Weight

var lastStoneWeight = function (stones) {
    while (stones.length > 1) {
        stones.sort((a, b) => b - a); //sort the remaining stones in decending order;
        stones[1] = stones[0] - stones[1]; //smash the first and second stones ie the stones with largest weight ans assign the remaining stone weight to 1st index
        stones.shift();//shift the array to get rid of the 0 index
    }
    return stones[0] //return the 0 index value ie the resultl
};

// 977 Squares of a Sorted Array 

var sortedSquares = function (nums) {
    let start = 0;
    let end = nums.length - 1;
    let idx = end;
    let sortPowArr = [];

    while (idx > -1) {
        if (Math.abs(nums[start]) > Math.abs(nums[end])) {
            sortPowArr[idx--] = nums[start] * nums[start];
            start++;
        } else {
            sortPowArr[idx--] = nums[end] * nums[end];
            end--;
        }
    }
    return sortPowArr;
};