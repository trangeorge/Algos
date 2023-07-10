// 9 Palindrome Number

var isPalindrome = function (x) {
    var s = x.toString();
    var t = s.split("").reverse().join("");
    return s === t;
};

// 13 Roman to Integer

var romanToInt = function (s) {
    obj = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    let res = 0;

    for (let i = 0; i < s.length; ++i) {
        if (obj[s[i]] < obj[s[i + 1]]) res -= obj[s[i]];
        else res += obj[s[i]];
    }
    res = Number.parseInt(res);
    return res;
};

console.log(romanToInt("III"))
console.log(romanToInt("LVIII"))
console.log(romanToInt("MCMXCIV"))

//21 Merge Two Sorted Lists

var mergeTwoLists = function (l1, l2) {
    if (l1 == null) return l2;
    if (l2 == null) return l1;


    if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    }

    else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
};

//58 Length of the Last Word

var lengthOfLastWord = function (s) {
    let result = s.trim().split(' ');
    return result[result.length - 1].length
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

//83 Remove Dupllicates from Sorted List

var deleteDuplicates = function (head) {
    //empty list
    if (head == null)
        return null;

    let curr = head;
    while (curr.next != null) {
        if (curr.val == curr.next.val) {
            let next_next = curr.next.next;
            let nodeToDelete = curr.next;
            delete (nodeToDelete);
            curr.next = next_next;
        }
        else//not equal
        {
            curr = curr.next;
        }
    }
    return head;
};

// 136 Single Number

var singleNumber = function (nums) {
    var sorted = nums.sort()
    console.log(sorted)
    for (let i = 0; i < sorted.length; i += 2) {
        if (sorted[i] === sorted[i + 1]) {
            continue;
        } else {
            return sorted[i]
        }
    }
};

console.log(singleNumber([2, 2, 1]))
console.log(singleNumber([4, 1, 2, 1, 2]))
console.log(singleNumber([1]))

// 268 Missing Number

var missingNumber = function (nums) {
    var sorted = nums.sort((a, b) => a - b);
    console.log(sorted)

    if (sorted[0] !== 0) {
        return 0
    }

    for (let i = 0; i < sorted.length; i++) {
        // hey yo, if you, if this number plus one is equal to the next number, then continue
        if (sorted[i] + 1 == sorted[i + 1]) {
            continue;
        } else {
            // if it's not equal, then return the missing number
            return sorted[i] + 1
        }
    }
};

console.log(missingNumber([1]))
console.log(missingNumber([3, 0, 1]))
console.log(missingNumber([0, 1]))
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]))

//217 Contains Duplicate 

var containsDuplicate = function (nums) {
    var sorted = nums.sort((a, b) => a - b)
    for (let i = 0; i < sorted.length; i++) {
        if (sorted[i] !== sorted[i + 1]) {
            continue;
        } else {
            return true
        }
    }
    return false
};
console.log(containsDuplicate([1, 2, 3, 1]))
console.log(containsDuplicate([1, 2, 3, 4]))
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]))

// 242 Valid Anasgram

var isAnagram = function (s, t) {
    return s.split('').sort().join('') === t.split('').sort().join('');
};