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