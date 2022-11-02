// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer:
// b) Verify and explain:

// --------------------1) What will this log?

const cohort = "LEARN 2022"
 console.log(cohort.length)

// a) Your answer: 9
// b) Verify and explain: 10 .length returns the length of the string or the amount of characters within "".

// --------------------2) What will this log?

const greeting = "Hello World!"
// console.log(greeting[4])

// a) Your answer: "o"
// b) Verify and explain: The [] indicates an index which displays the character count from 0. "H" is 0 while "o" is 4.

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
// console.log(languages[index])

// a) Your answer: "Ruby"
// b) Verify and explain: The index is starting from 0 at Javascript. Ruby is 1 due to sequential order from 0.

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: SATURDAY, SUNDAY
// b) Verify and explain:not a function of an array. In order for built in method touppercase to work, weekendDays has to be in string format not array. 

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
// console.log(typeof dataTypes.length)

// a) Your answer:number
// b) Verify and explain: built in method length turns the strings in the array into numbers. built in method typeof infers what primitive datatype the array is in which after .length is number.
