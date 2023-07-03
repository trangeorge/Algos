// 9 Palindrome Number

var isPalindrome = function (x) {
    var s = x.toString();
    var t = s.split("").reverse().join("");
    return s === t;
};

// 66 Plus One

var plusOne = function (arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] < 9) {
            arr[i]++;
            return arr;
        }
        arr[i] = 0;
    }
    arr.unshift(1);
    return arr;
};

console.log(plusOne([1, 2, 3]))
console.log(plusOne([4, 3, 2, 1]))
console.log(plusOne([9]))

//67 Add Binary

var addBinary = function (a, b) {

};

// 70 Climbing Stairs

var climbStairs = function (n) {
    let first = 1;
    let second = 1;
    for (let i = 0; i < n - 1; i++) {
        let temp = first;
        first = first + second;
        second = temp;
    }
    return first;
};

console.log(climbStairs(2))
console.log(climbStairs(3))