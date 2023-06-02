// what is a variable? like a box, put things into it (data) and write a name to call it and find it.

// How do you declare a variable?

// var x
// let x
// const x

// Changing a variable's value?

var x = 10;

x + 2;
x = x + 2;
x += 2; // shorter way of writing

// Data Types in JavaScript

//Numbers
//String
//Boolean
//Null
//Undefined




//  1. print 1 to 255

function print1to255() {
    for (i = 1; i <= 255; i++) {
        console.log(i)
    }

}
// print1to255()


// 2. Print odds 1 to 255

function printOdd1to255() {
    for (i = 1; i <= 255; i += 2) {
        if (i % 2 != 0) {
            console.log(i)
        }
    }
}
printOdd1to255()


// 3. Print ints and sum 0-255



function printintsandsum0to255() {
    var total = 0;
    for (i = 0; i <= 255; i++) {
        // console.log(i)
        total = total + i
        //after logging, add the value to total
    }
    // console.log(total)
}
printintsandsum0to255()


// 4. Print and iterate array
function printArrayVals(arr) {
    for (i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}

// printArrayVals([1, 2, 3, 4, 5])



// 5. Find and Print Max || , Given an array, find and print its largest element.

function printMaxOfArray(arr) {
    var max = 0;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    } return max
}
var largest = printMaxOfArray([1, 2, 3, 4, 5, 0])
console.log(largest)


// 6. printAverageOfArray(arr) || Analyze an array’s values and print the average.

function printaveragenum(arr) {
    var average = 0;
    for (i = 0; i < arr.length; i++) {
        average = average + arr[i];
    } average = average / arr.length;
    return Math.round(average);
}
var total = printaveragenum([4, 6, 9, 23, 8, 14])

// console.log(total)


// 7. Create an array with all the odd integers between 1 and 255 (inclusive).



function returnOddsArray1To255() {
    var arr = []
    for (i = 1; i <= 255; i += 2) {
        arr.push(i)
    } return arr
}


// var result = returnOddsArray1To255()

// console.log(result)


// 8. Square each value in a given array, returning that same array with changed values

function squareArrayVals(arr) {
    for (i = 0; i < arr.length; i++) {
        console.log("oldvalue: " + arr[i])
        arr[i] = arr[i] * arr[i];
        console.log(arr[i])
    }
    return arr;
}

// var result = squareArrayVals([1, 3, 6, 10])

// console.table(result)



// 9. Given an array and a value Y, count and print the number of array values greater than Y.

function printArrayCountGreaterThanY(arr, y) {
    var count = 0
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > y) {
            count++
        }
    }
    console.log(count)
}

// printArrayCountGreaterThanY([1, 2, 3, 4, 5], 3)


// 10. Return the given array, after setting any negative values to zero.


function zeroOutArrayNegativeVals(arr) {
    for (i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 0
        }
    }
    return arr;
}

// var result = zeroOutArrayNegativeVals([-2, 1, 3, -5, 0, 0.1])

// console.log(result)



// 11. Given an array, print the max, min and average values for that array.

function printMaxMinAverageArrayVals(arr) {
    var max = 0;
    var min = arr[0];
    var average = 0;
    for (i = 0; i < arr.length; i++) {
        average = average + arr[i];
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
    } average = average / arr.length;
    return [max, min, average]
}

// var result = printMaxMinAverageArrayVals([2, 4, 6, 8, 10])

// console.log(result)

// 12. Given an array, move all values forward (to the left) by one index, dropping the first value and leaving a 0 (zero) value at the end of the array.

function shiftArrayValsLeft(arr) {
    arr.shift();
    arr.push(0);
    for (i = 0; i < arr.length; i++)
        return arr
}
// var result = shiftArrayValsLeft([1, 2, 3, 4, 5, 6])

// console.log(result)

// 13. Swap String For Array Negative Values Given an array of numbers, replace any negative values with the string 'Dojo'.

function swapStringForArrayNegativeVals(arr) {
    for (i = 0; i < arr.length; i++)
        if (arr[i] < 0) {
            arr[i] = "Dojo";
        }
    return arr
}
// var result = swapStringForArrayNegativeVals([3, -5, 2, -8, 4])

// console.log(result)