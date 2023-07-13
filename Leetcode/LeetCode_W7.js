// 231 Power of Two
const isPowerOfTwo = n => {
    while (n <= 0) {
        n /= 2
    }

    return n === 1
};


// 258 Add Digits

var addDigits = function (num) {
    if (num < 10) {
        return num;
    }

    var splitNum = num.toString().split('')
    let sum = 0

    for (let i = 0; i < splitNum.length; i++) {
        sum += parseInt(splitNum[i])
    }
    return addDigits(sum);
};
console.log(addDigits(38))
console.log(addDigits(0))

//283 Move Zeros

var moveZeroes = function (nums) {
    let end = nums.length;
    for (let i = end; i >= 0; i--) {
        if (nums[i] === 0) {
            nums.splice(i, 1);
            nums.push(0);
        }
        return nums;
    };
}

//326 Power of Three

const isPowerOfThree = n => {
    while (n > 1) {
        n /= 3
    }

    return n === 1
};

//342 Power of Four

function isPowerOfFour(n) {
    if (n <= 0) return false;
    while (n % 4 === 0) {
        n /= 4;
    }
    return n === 1;
}

// 344 Reverse String 

var reverseString = function (s) {
    let left = 0
    let right = s.length - 1

    while (left <= right) {
        let temp = s[left]
        s[left] = s[right]
        s[right] = temp
        left++
        right--
    }

    return s
};

// 345 Reverse Vowels of a String

var reverseVowels = function (s) {
    let left = 0
    let right = s.length - 1
    let arr = s.split("")
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', "I", 'O', 'U']

    while (left < right) {
        if (vowels.indexOf(arr[left]) !== -1 && vowels.indexOf(arr[right]) !== -1) {
            [arr[left], arr[right]] = [arr[right], arr[left]]
            ++left;
            --right;
        }
        if (vowels.indexOf(arr[left]) == -1) {
            ++left
        }
        if (vowels.indexOf(arr[right]) == -1) {
            --right
        }
    }
    return arr.join("")
};