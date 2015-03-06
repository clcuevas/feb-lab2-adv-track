/*********************************************************
LAB 2: SORTING AND CAMPY SCI-FI

Welcome to Lab 2 =)

Be sure to read all the comments!

All of the instructions are inline with the assignment below.
Look for the word TODO in comments.  Each TODO will have a
description of what is required.

To run this file (in the terminal) use: node lab2.js

*********************************************************/
// SETUP
//*********************************************************

// We're going to use this special assert method again to
// test our code
function assert(expression, failureMessage) {
  if (!expression) {
    console.log("assertion failure: ", failureMessage);
  }
}

//*********************************************************
// PROBLEM 3: Sorting. 20 points.
//
// Implement the following functions. Write at least 2
// assertions for each one
//*********************************************************

var fruit = ["banana", "orange", "cherry", "apple", "watermelon", "grape", "strawberry", "kiwi", "blueberry"];
var fruitCorrect = ["banana", "orange", "apple", "grape", "kiwi", "watermelon", "blueberry", "strawberry", "cherry"];
var dogBreeds = ["hound", "terrier", "akita", "retriever", "chihuahua", "shepherd", "pitbull", "eskimo", "beagle", "collie", "boxer", "bulldog"];
var dogCorrect = ["akita", "chihuahua", "hound", "shepherd", "collie", "beagle", "bulldog", "pitbull", "eskimo", "terrier", "retriever", "boxer"];

function lastLetterSort(stringArray) {
  //TODO: implement me. sort the strings in alphabetical
    // order using their last letter
    // read this: http://www.w3schools.com/jsref/jsref_sort.asp
  var myTempArray = []; //hold array list after reversing
  var finalArray = []; //hold array list after reversing and sorting
  console.log("BEFORE LOOP: " + stringArray);
  
  /*this loop will reverse the characters in each string (index[i]) of the array*/
  for (var i = 0; i < stringArray.length; i++) {
    myTempArray.push(stringArray[i].split('').reverse('').join(''));
  }
  
  //sort the temporary array container after reversing
  myTempArray.sort();

  /*this loop will push the sorted temp array that has each of its
  strings in reverse order and sorted, while pushing it will also
  undo the string character reversal but will maintain its order.
  This order will be contained in another temporary array called 
  finalArray*/
  for (var i = 0; i < myTempArray.length; i++) {
    finalArray.push(myTempArray[i].split('').reverse('').join(''));
  }
  console.log("finalArray FINAL SORT:  " + finalArray);

  /*empty our original array so we can push our array items in the sorted list we are looking for*/
  stringArray = [];

  /*push finalArray sorted items into the original array*/
  stringArray.push(finalArray);
  console.log("stringArray AFTER: " + stringArray);

  if (stringArray === finalArray) {
    return true;
  } else {
    return false;
  }
}

assert(lastLetterSort(fruit) === false, "incorrect sort!"); //why????
assert(lastLetterSort(dogBreeds) === true, "incorrect sort!");

var numbers1 = [23, 5, 44, 100, 115];
var numbers2 = [66, 39, 1, 209, 557];
var numbers3 = [1, 3, 1, 3];
var numbersArray = [numbers1, numbers2, numbers3];
var numbers4 = [15, 69];
var numbers5 = [365, 1, 0, 2];
var numbers6 = [4, 88];
var numbersArray2 = [numbers4, numbers5, numbers6];

function sumArray(numberArray) {
  var sum = 0;
  // TODO: implement me using forEach
  numberArray.forEach(function(value) {
  	sum += value;
  });
  return sum;
}

assert(sumArray(numbers1) === 287, "incorrect SUM!");
assert(sumArray(numbers2) === 872, "incorrect SUM!");
assert(sumArray(numbers3) === 8, "incorrect SUM!");
// console.log(numbersArray);


function sumSort(arrayOfArrays) {
  // TODO: implement me using sumArray
  //  order the arrays based on the sum of the numbers
  //  inside each array
  var sumValues = [];
  for (var i = 0; i < arrayOfArrays.length; i++) {
    var order = sumArray(arrayOfArrays[i]);
    sumValues.push(order);
  }
  sumValues.sort(function(a, b) {
    return a-b;
  });
  console.log(sumValues);
  if (sumValues[0] > sumValues[1]) {
    return false;
  } else {
    return true;
  }
}

assert(sumSort(numbersArray) === true, "incorrect sumSort!");
assert(sumSort(numbersArray2) === true, "incorrect sumSort!");
