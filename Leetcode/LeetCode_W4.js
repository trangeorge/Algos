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