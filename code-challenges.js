// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Describing your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// Describe your process:

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"
// Expected outcome: "cherry"

// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Describe your process:

//create the function temp
//inputs will be temp1, temp2, and temp, 3
//use variable "bp" as placeholder for temperatures
//if statement for deciding the result
    //if bp is <212 
        //result 42 is below boiling point
    //else if bp is >212
        //result 350 is above boiling point
    //else if bp is =212 
        //result 212 is at boiling point
    //else
        //result error



const temp1 = 42
// Expected output: "42 is below boiling point"

const temp2 = 350
// Expected output: "350 is above boiling point"

const temp3 = 212
// Expected output: "212 is at boiling point"

const tempBp = (bp) =>{
    if(bp < 212){
        return `${bp} is below boiling point`
    }
    else if(bp>212){
        return `${bp} is above boiling point`
    } 
    else if(bp=212){
        return `${bp} is at boiling point`
    } 
    else {
        return "Error"
    }
}
console.log(tempBp(temp3))
//Function runs well if temp1,temp2,temp3 not utilized only works with numbers
//Function works after placing after the const values.

// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Describe your process:
//Utilize the concat built in method to bring both arrays together for a new array
//Create a new variable for the new array
//Utilze the length built in method to get the length of the new array
const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 9
var padresWorld =padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns)
console.log(padresWorld.length)
//output is 9
// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Describe your process:
//Utilize the built in method split to convert the string into an array for a new variable
//Utilize the built in method reverse to reverse the order of words for a new variable
//Utilize the built in method join for the second new variable to convert the array back into a string
const currentCohort = "Golf 2022"

var futureCohort = currentCohort.split("")
var backwardsCohort=futureCohort.reverse()
console.log(backwardsCohort.join(""))
// Expected output: "2202 floG"
//output was 2,2,0,2 ,f,l,o,G
// output was 2202 flog after adding quotation marks to built in method "join"

// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Describe your process:
//Utilize the built in method lastIndexof
const myNumbers = [13, 34, 42, 5, 5, 10, 27, 42, 10]
const givenValue1 = 42
// Expected output: 7
console.log(myNumbers.lastIndexOf(42))
//output is 7
const givenValue2 = 10
// Expected output: 8
console.log(myNumbers.lastIndexOf(10))
//output is 8
// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Describe your process:
//Utilize the built in method sort
//Create new variables for sorted arrays
//Utilize the built in method reverse to display largest to smallest
const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
// Expected output: [82, 80, 79, 77, 76, 73, 72]
var sanDS = sanDiegoSummerTemperatures.sort()
console.log(sanDS.reverse())
//output is [82, 80, 79, 77, 76, 73, 72]
const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
// Expected output: [68, 67, 66, 66, 62, 59, 59]
var sanDW = sanDiegoWinterTemperatures.sort()
console.log(sanDW.reverse())
//output is [68, 67, 66, 66, 62, 59, 59]