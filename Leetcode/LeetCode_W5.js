// 645 Set Mismatch


var findErrorNums = function (nums) {
    let result = [];

    nums = nums.sort()
    for (let i = 1; i <= nums.length; i++) {
        if (nums[i - 1] == nums[i]) result[0] = nums[i]
        if (nums.indexOf(i) == -1) result[1] = i;
    }
    return result
};

console.log(findErrorNums([1, 2, 2, 4]))
console.log(findErrorNums([1, 1]))

// 35 Search Insert Position

var searchInsert = function (nums, target) {
    let low = 0;
    let high = nums.length;

    while (low < high) {
        let middleIndex = low + Math.floor((high - low) / 2);

        if (nums[middleIndex] === target) {
            return middleIndex;
        }

        if (target > nums[middleIndex]) {
            low = middleIndex + 1;
        } else {
            high = middleIndex;
        }
    }
    return low
};

console.log(searchInsert([1, 3, 5, 6], 5))
console.log(searchInsert([1, 3, 5, 6], 2))
console.log(searchInsert([1, 3, 5, 6], 7))

// 876 Middle of the Linked List

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null
    }
}

var middleNode = function (head) {
    let twice = head;
    let once = head;
    while (twice && twice.next) {
        twice = twice.next.next;
        once = once.next
    }
    return once
};

// console.log(middleNode([1, 2, 3, 4, 5]))

// 520 Detect Capital

const regexUppercase = /^[A-Z]+$/;
const regexLowercase = /^[a-z]+$/;
var detectCapitalUse = function (word) {
    if (regexUppercase.test(word) || regexLowercase.test(word)) return true;
    let output = false;

    for (let i = 0; i < word.length; i++) {
        if (regexUppercase.test(word[i]) && !i) output = true;
        if (regexUppercase.test(word[i]) && i) output = false;
    }

    return output;
};

console.log(detectCapitalUse("USA"))
console.log(detectCapitalUse("FLaG"))