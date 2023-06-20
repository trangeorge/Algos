// 1854 Maximum Population Year 

var maximumPopulation = function (logs) {
    arr = new Array(2050).fill(0)

    for (log of logs)
        for (let i = log[0]; i < log[1]; i++) arr[i]++
    return arr.indexOf(Math.max(...arr))
}

console.log(maximumPopulation([[1993, 1999], [2000, 2010]]))