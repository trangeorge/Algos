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

// var result = countOdds(4, 9)
// console.log(result)

// 1800 Maximum Ascending Subarray Sum

function maxAscendingSum(arrs) {
    var sum = arrs[0];
    var temp = arrs[0];
    for (i = 1; i < arrs.length; i++) {
        if (arrs[i] > arrs[i - 1]) {
            temp += arrs[i];
        } else {
            temp = arrs[i];
        }
        sum = Math.max(sum, temp)
    }
    return sum
}

// console.log(maxAscendingSum([10, 20, 30, 5, 10, 50]))

// 1323. Maximum 69 Number 



function maximum69Number(num) {
    var numstring = num.toString().replace("6", "9")
    return parseInt(numstring)
}
console.log(maximum69Number(99669))



var maximum69Number2 = function (num) {
    return Number(String(num).replace(6, 9));
};

console.log(maximum69Number2(6696))


// 1207. Unique Number of Occurrences

var uniqueOccurrences = function (arr) {
    var count = {}

    for (let i = 0; i < arr.length; i++) {
        if (count[arr[i]]) {
            count[arr[i]]++
        } else {
            count[arr[i]] = 1
        }
    }

    const countValues = Object.values(count)

    for (let i = 0; i < countValues.length - 1; i++) {
        if (countValues[i] === countValues[i + 1]) return false;
    } return true;

}



console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3]))
console.log(uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0]))