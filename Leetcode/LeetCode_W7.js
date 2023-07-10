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