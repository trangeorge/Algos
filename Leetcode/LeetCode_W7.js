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

// 383 Ransom Note

var canConstruct = function (ransomNote, magazine) {
    ransomNote = ransomNote.split('').sort().join('')
    magazine = magazine.split('').sort().join('')
    // edge case 
    if (ransomNote.length > magazine.length) {
        return false
    }

    let subsequence = 0;
    for (let i = 0; i < magazine.length; i++) {
        if (ransomNote[subsequence] === magazine[i]) {
            // ! if it is matching, increment subsequence
            subsequence++;
        }
    }
    if (subsequence === ransomNote.length) {
        return true
    } else {
        return false
    }
};
console.log(canConstruct("a", "b"))
console.log(canConstruct("aa", "ab"))
console.log(canConstruct("aa", "aab"))
console.log(canConstruct("aab", "baa"))

//448 Find All Numbers Disappeared in an Array

var findDisappearedNumbers = function (nums) {
    let output = []
    for (let i = 1; i <= nums.length; i++) {
        if (nums.indexOf(i) < 0) {
            output.push(i)
        }
    }
    return output
};

//485 Max Consecutive Ones 

var findMaxConsecutiveOnes = function (nums) {
    let max = 0;
    let current = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            current += 1;
        } else {
            current = 0;
        }

        if (current > max) {
            max = current;
        }
    }
    return max;
};

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]))

// 496 Next Greater Element 1

var nextGreaterElement = function (nums1, nums2) {
    const ans = [];
    for (let i = 0; i < nums1.length; i++) {
        let max = -1;
        for (let j = 0; j < nums2.length; j++) {
            let index = j;
            if (nums1[i] === nums2[j]) { // Found element in nums2 that matches current element in nums1
                while (index !== nums2.length) { // Iterate through remaining elements in nums2 to find next greater element
                    if (nums2[index] > nums1[i]) {
                        max = nums2[index]; // Update max if we find a greater element
                        break;
                    }
                    index++;
                }
            }
        }
        ans.push(max);
    }
    return ans;
}

var nextGreaterElement = function (nums1, nums2) {
    let result = [];
    for (let num of nums1) {
        let flag = -1;
        for (let i = nums2.indexOf(num) + 1; i < nums2.length; i++) {
            if (nums2[i] > num) {
                flag = nums2[i];
                break;
            }
        }
        result.push(flag);
    }
    return result;
};

// 521 Longest Uncommon Subsequence I

var findLUSlength = function (a, b) {
    if (a == b) return -1
    if (a.length > b.length) return a.length
    else return b.length
};