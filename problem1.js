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
    console.log("Startiing rate is " + rate);
  }
  console.log("It took " + hoursToConsumeCity + " hours to consume the city.");
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
    console.log("Starting rate is " + peoplePerHour);
  }
  console.log("I have consumed " + consumption + " people in " + hoursTotal + " hours.");
  return hoursTotal;
}

assert(blob.hoursToOoze(0, 1) === 0, "no people means no time needed.");
assert(blob.hoursToOoze(1000, 1) === hoursSpentInDowington,
  "hoursSpentInDowington should match hoursToOoze\"s result for 1000");
// TODO: write three more assertions like the two above, testing out
// the hoursToOoze method.
assert(blob.hoursToOoze(2000, 1) === 62, "Your hours are off, should be 62");
assert(blob.hoursToOoze(3000, 1)=== 76, "Your hours are off, should be 76");
assert(blob.hoursToOoze(4000, 2) === 87, "Your hours are off, should be 87");

