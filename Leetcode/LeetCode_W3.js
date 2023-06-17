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