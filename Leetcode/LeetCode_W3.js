// 1337. The K weakest Rows in a Matrix

var kWeakestRows = function (mat, k) {
    var arr = []

    for (var i = 0; i < mat.length; i++) {
        var sum = 0
        for (var j = 0; j < mat[i].length; j++) {
            sum = sum + mat[i][j]
        }
        arr.push({
            index: i,
            count: sum,
        })
    }
    return arr.sort((a, b) => a.count - b.count).slice(0, k).map(item => item.index)
};

console.log(kWeakestRows([[1, 1, 0, 0, 0],
[1, 1, 1, 1, 0],
[1, 0, 0, 0, 0],
[1, 1, 0, 0, 0],
[1, 1, 1, 1, 1]], 3))


console.log(kWeakestRows([[1, 0, 0, 0],
[1, 1, 1, 1],
[1, 0, 0, 0],
[1, 0, 0, 0]], 2))


// 1446. Consecutive Characters

var maxPower = function (s) {

    var counter = 1
    var max = 1

    for (let i = 0; i < s.length - 1; i++) {
        if (s[i] === s[i + 1]) {
            counter++
            max = Math.max(counter, max)
        } else {
            counter = 1
        }
    } return max
}

// part 2

var maxPower2 = function (s) {
    var arr = s.split("")
    var counter = 0
    var max = 0

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1]) {
            counter++
        } else {
            counter++
            if (max < counter) {
                max = counter
            }
            counter = 0
        }
    } return max
};

console.log(maxPower2("leetcode"))
console.log(maxPower2("leeeeetcodeee"))


// 344 Reverse String

var reverseString = function (s) {
    var left = 0;
    var right = s.length - 1;

    while (left <= right) {
        [s[left], s[right]] = [s[right], s[left]]
        left++
        right--
    }
    return s
}

console.log(reverseString(["h", "e", "l", "l", "o"]))
console.log(reverseString(["h", "e", "l"]))



// 342 Power of Four

var isPowerOfFour = function (n) {
    if (n < 1) return false

    for (let i = 0; i <= n; i++) {
        let num = Math.pow(4, i)
        if (num === n) {
            return true
        }
        if (num > n) {
            return false
        }
    }
}

console.log(isPowerOfFour(16))
console.log(isPowerOfFour(5))
console.log(isPowerOfFour(1))
console.log(isPowerOfFour(19))


// 1979 Find Greatest Common Divisor of Array

var findGCD = function (nums) {
    var newNum = [Math.min(...nums), Math.max(...nums)]
    var firstNum = newNum[0]
    var secondNum = newNum[1]

    while (secondNum) {
        let newNum = secondNum;
        secondNum = firstNum % secondNum;
        firstNum = newNum;
    }
    return firstNum;
}

console.log(findGCD([2, 5, 6, 9, 10]))
console.log(findGCD([7, 5, 6, 8, 3]))
console.log(findGCD([3, 3]))


// 1876 Substrings of Size Three with Distinct Characters

var countGoodSubstrings = function (s) {
    var result = 0;

    for (let i = 1; i < s.length - 1; i++)
        if (s[i] != s[i - 1] && s[i] != s[i + 1] && s[i - 1] != s[i + 1])
            result++;
    return result;
}

console.log(countGoodSubstrings("xyzzaz"))
console.log(countGoodSubstrings("aababcabc"))

// 1431 Kids with the Greatest Number of Candies

var kidsWithCandies = function (candies, extraCandies) {
    var maxCandies = Math.max(...candies);
    var result = [];

    for (let i = 0; i < candies.length; i++) {
        if (candies[i] + extraCandies >= maxCandies) {
            result.push(true);
        } else {
            result.push(false);
        }
    }
    return result
}

console.log(kidsWithCandies([2, 3, 5, 1, 3], 3))
console.log(kidsWithCandies([4, 2, 1, 1, 2], 1))
console.log(kidsWithCandies([12, 1, 12], 10))

// 504 Base 7

var convertToBase7 = function (num) {
    return num.toString(7);
}


console.log(convertToBase7(100))
console.log(convertToBase7(-7))

