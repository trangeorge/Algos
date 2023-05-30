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




// print 1 to 255

function print1to255() {
    for (i = 1; i <= 255; i++) {
        console.log(i)
    }

}
// print1to255()


// Print odds 1 to 255

function printOdd1to255() {
    for (i = 1; i <= 255; i += 2) {
        if (i % 2 != 0) {
            console.log(i)
        }

    }

}
// printOdd1to255()


//Print ints and sum 0-255



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
//Print and iterate array



// Find and Print Max || printMaxOfArray(arr), Given an array, find and print its largest element.



//printAverageOfArray(arr) || Analyze an array’s values and print the average.

function printaveragenum(arr) {
    var average = 0;
    for (i = 0; i < arr.length; i++) {
        average = average + arr[i];
    } average = average / arr.length;
    return Math.round(average);
}
var total = printaveragenum([4, 6, 9, 23, 8, 14])

// console.log(total)


// Create an array with all the odd integers between 1 and 255 (inclusive).



function returnOddsArray1To255(arr) {
    var arr = []
    for (i = 1; i <= 255; i += 2) {
        arr.push(i)
    } return arr
}


// var result = returnOddsArray1To255()

// console.log(result)


// Square each value in a given array, returning that same array with changed values

squareArrayVals(arr)
