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
// PROBLEM 1: The Blob. 20 points
//*********************************************************

/* Dowington, PA had 1000 citizens on the night the blob escaped
 its meteorite. At first, the blob could only find and consume
 Pennsylvanians at a rate of 1/hour. However, each time it digested
 someone, it became faster and stronger: adding to its consumption
 rate by 1 person/hour.

 persons consumed  |  rate of consumption
 ------------------|---------------------
        0          |       1/hour
        1          |       2/hour
        2          |       3/hour
        3          |       4/hour

 TODO: First, make a constructor function, called Blob, that makes blobs.

 TODO: Next, create an instance of Blob named blob.

 TODO: Then, use a loop to calculate how long it took the blob to finish
 with Dowington.
*/
function Blob() {

}

var blob = new Blob(); //instance of Blob
var hoursToConsumeCity = 0; //counter of hours(tracking hours)

function finishDowington() {
  var population = 1000;
  var peopleConsumed = 0;
  var rate = 1;

  for(var i = peopleConsumed; i < population; i+=rate) {
    peopleConsumed += rate;
    rate++;
    hoursToConsumeCity++;
    // console.log("Startiing rate is " + rate);
  }
  // console.log("It took " + hoursToConsumeCity + " hours to consume the city.");
  return hoursToConsumeCity; //return hours it took to consume city
}

finishDowington();


var hoursSpentInDowington = hoursToConsumeCity; // TODO: assign me the value of the
                           // above calculation

// Now, write a method that takes a population for an arbitrary
// town, and the starting consumption rate, and returns the number
// of hours the blob needs to ooze its way through that town.
Blob.prototype.hoursToOoze = hoursToOoze; //method

function hoursToOoze(population, peoplePerHour) {
  // TODO: implement me based on the instructions above. Be sure to then assign me to the Blob's prototype.

  var hoursTotal = 0; //counter
  var consumption = 0; //counter of people consumed

  for(var i = consumption; i < population; i+=peoplePerHour) {
    consumption+=peoplePerHour;
    peoplePerHour++;
    hoursTotal++;
    // console.log("Starting rate is " + peoplePerHour);
  }
  console.log("I have consumed " + consumption + " people in " + hoursTotal + " hours.");
  return hoursTotal;
}

assert(blob.hoursToOoze(0, 1) === 0, "no people means no time needed.");
assert(blob.hoursToOoze(1000, 1) === hoursSpentInDowington,
  "hoursSpentInDowington should match hoursToOoze\"s result for 1000");
// TODO: write three more assertions like the two above, testing out
// the hoursToOoze method.
// assert(blob.hoursToOoze(2000, 2) === hoursSpentInDowington, "hoursSpentInDowington should match hoursToOoze\"s result for 2000");
assert(blob.hoursToOoze(2000, 1) === 62, "Your hours are off, should be 62");
assert(blob.hoursToOoze(3000, 1)=== 76, "Your hours are off, should be 76");
assert(blob.hoursToOoze(4000, 2) === 87, "Your hours are off, should be 87");
//*********************************************************
// PROBLEM 2: Universal Translator. 20 points
//*********************************************************

var hello = {
  klingon: "nuqneH",  // home planet is Qo"noS
  romulan: "Jolan\"tru", // home planet is Romulus
  "federation standard": "hello" // home planet is Earth
};

// TODO: define a constructor that creates objects to represent
// sentient beings. They have a home planet, a language that they
// speak, and method called sayHello.

function SentientBeing (homePlanet, language) {
  // TODO: specify a home planet and a language
  // you'll need to add parameters to this constructor
  this.homePlanet = homePlanet;
  this.language = language;
}

// sb is a SentientBeing object
function sayHello (sb) {
    // TODO: say hello prints out (console.log's) hello in the
    // language of the speaker, but returns it in the language
    // of the listener (the sb parameter above).
    // use the 'hello' object at the beginning of this exercise
    // to do the translating
    if (sb.language === hello.klingon) {
      console.log(hello.klingon);
      return hello.klingon;
    } else if (sb.language === hello.romulan) {
      console.log(hello.romulan);
      return hello.romulan;
    } else if (sb.language === hello["federation standard"]) {
      console.log(hello["federation standard"]);
      return hello["federation standard"];
    } else {
      console.log("This is not a language I'm familiar with");
    }
    //TODO: put this on the SentientBeing prototype
  }

SentientBeing.prototype.sayHello = sayHello;

// TODO: create three subclasses of SentientBeing, one for each
// species above (Klingon, Human, Romulan).
function Klingon() {
  this.homePlanet = "Qo\'noS";
  this.language = hello.klingon;
}

function Human() {
  this.homePlanet = "Earth";
  this.language = hello["federation standard"];
}

function Romulan() {
  this.homePlanet = "Romulus";
  this.language = hello.romulan;
}

Klingon.prototype = new SentientBeing(); //inheritance
Human.prototype = new SentientBeing();  //inheritance
Romulan.prototype = new SentientBeing(); //inheritance

assert((new Human()).sayHello(new Klingon()) === "nuqneH",
  "the klingon should hear nuqneH");
// TODO: write five more assertions, to complete all the possible
// greetings between the three types of sentient beings you created above.
assert((new Human()).sayHello(new Romulan()) === "Jolan\"tru", "the Romulan should hear Jolan\"tru");
assert((new Klingon()).sayHello(new Human()) === "hello", "the Human\s should hear Hello");
assert((new Klingon()).sayHello(new Romulan()) === "Jolan\"tru", "the Romulan should hear Jolan\"tru");
assert((new Romulan()).sayHello(new Klingon()) === "nuqneH", "the klingon should hear nuqneH");
assert((new Romulan()).sayHello(new Human()) === "hello", "the Human should hear hello");

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
  for (/*grunt says i already defined*/; i < myTempArray.length; i++) {
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

//*********************************************************
// PROBLEM 4: Cleanup: 10 points
// Makes sure this file passes jshint and jscs
//
// ./node_modules/.bin/grunt jshint
// ./node_modules/.bin/grunt jscs
//*********************************************************
