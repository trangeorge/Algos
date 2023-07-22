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

//922 Sort Array By Parity II

var sortArrayByParityII = function (nums) {

    let res = new Array(nums.length);
    let e = 0, o = 1;

    for (i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            res[e] = nums[i];
            e += 2
        }
        else {
            res[o] = nums[i];
            o += 2
        }
    }
    return res;
};

var selfDividingNumbers = function (left, right) {
    const arr = [];
    for (let i = left; i <= right; i++) {
        let num = i;
        let flag = true;
        while (num > 0) {
            let a = num % 10;
            if (i % a !== 0) {
                flag = false;
                break;
            }
            num = Math.floor(num / 10);
        }
        if (flag)
            arr.push(i);
    }

    return arr;
};