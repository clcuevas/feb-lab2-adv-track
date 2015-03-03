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

Klingon.prototype = new SentientBeing; //inheritance
Human.prototype = new SentientBeing;	//inheritance
Romulan.prototype = new SentientBeing; //inheritance

assert((new Human()).sayHello(new Klingon()) === "nuqneH",
  "the klingon should hear nuqneH");
// TODO: write five more assertions, to complete all the possible
// greetings between the three types of sentient beings you created above.
assert((new Human()).sayHello(new Romulan()) === "Jolan\"tru", "the Romulan should hear Jolan\"tru");
assert((new Klingon()).sayHello(new Human()) === "hello", "the Human\s should hear Hello");
assert((new Klingon()).sayHello(new Romulan()) === "Jolan\"tru", "the Romulan should hear Jolan\"tru");
assert((new Romulan()).sayHello(new Klingon()) === "nuqneH", "the klingon should hear nuqneH");
assert((new Romulan()).sayHello(new Human()) === "hello", "the Human should hear hello");

