// 1854 Maximum Population Year 

var maximumPopulation = function (logs) {
    arr = new Array(2050).fill(0)

    for (log of logs)
        for (let i = log[0]; i < log[1]; i++) arr[i]++
    return arr.indexOf(Math.max(...arr))
}

console.log(maximumPopulation([[1993, 1999], [2000, 2010]]))

// 1455 Check if a word occurs as a prefix of any word in a sentence 

var isPrefixOfWord = function (sentence, searchWord) {
    sentence = sentence.split(' ');

    for (let i = 0; i < sentence.length; i++) {
        if (!sentence[i].indexOf(searchWord)) {
            return i + 1
        }
    }
    return -1;
}

console.log(isPrefixOfWord('i love eating burger', 'burg'))


// 2042 Check if Numbers are Ascending in a Sentence


var areNumbersAscending = function (s) {
    var tokens = s.split(" ")
    var prevNumber = -1

    for (let i = 0; i < s.length; i++) {
        if (!isNaN(tokens[i])) {
            let currentNumber = parseInt(tokens[i])
            if (currentNumber <= prevNumber) return false
            prevNumber = currentNumber
        }
    }
    return true
};

console.log(areNumbersAscending("1 box has 3 blue 4 red 6 green and 12 yellow marbles"))
console.log(areNumbersAscending("hello world 5 x 5"))
console.log(areNumbersAscending("4 5 11 26"))


//724. Find Pivot Index


var pivotIndex = function (nums) {
    let ls = 0, rs = nums.reduce((a, b) => a + b) - nums[0];

    if (ls === rs) return 0;

    for (let i = 1; i < nums.length; i++) {
        ls += nums[i - 1];
        rs -= nums[i];
        if (ls === rs) return i;
    }
    return -1;
};

console.log(pivotIndex([1, 7, 3, 6, 5, 6]))
console.log(pivotIndex([2, 1, -1]))
console.log(pivotIndex([1, 2, 3]))

// 1304 Find N Unique Intergers Sum up to Zero

var sumZero = function (n) {
    var result = [];

    for (let i = 1; i <= n / 2; i++) {
        result.push(i, -i);
    }
    if (n % 2) result.push(0);
    return result
};

console.log(sumZero(5))
console.log(sumZero(3))
console.log(sumZero(1))

// 922 Sory Array By Partiy 2

var sortArrayByParityII = function (nums) {
    let result = [];
    nums = nums.sort()


    let odd = [];
    let even = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) odd.push(nums[i]);
        else {
            even.push(nums[i])
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (i % 2 === 0)
            result.push(odd.pop())
        else result.push(even.pop())
    }
    return result
};

console.log(sortArrayByParityII([4, 2, 5, 7]))
console.log(sortArrayByParityII([2, 3]))


// 766 Toeplitz Matrix

var isToeplitzMatrix = function (matrix) {
    for (let i = 0; i < matrix.length - 1; i++) {
        for (let j = 0; j < matrix[i].length - 1; j++) {
            if (matrix[i][j] !== matrix[i + 1][j + 1]) {
                return false
            }
        }
    }
    return true
};

console.log(isToeplitzMatrix([[1, 2, 3, 4], [5, 1, 2, 3], [9, 5, 1, 2]]))

var findNonMinOrMax = function (nums) {
    const max = Math.max(...nums);
    const min = Math.min(...nums);

    for (let i = 0; i < nums.length; i++) {
        if (max > nums[i] && nums[i] > min) {
            return nums[i];
        }
    }
    return -1;
};

console.log(findNonMinOrMax([3, 2, 1, 4]))
console.log(findNonMinOrMax([1, 2]))
console.log(findNonMinOrMax([2, 1, 3]))

// 2057 Smallest Index with Equal Value

var smallestEqual = function (nums) {

    for (let i = 0; i < nums.length; i++) {
        if (i % 10 === nums[i]) {
            return i
        }
    }
    return -1;
};

console.log(smallestEqual([0, 1, 2]))
console.log(smallestEqual([4, 3, 2, 1]))
console.log(smallestEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))