var fruit = ["banana", "orange", "cherry", "apple", "watermelon", "grape", "strawberry"];
var myTempArray = [];
var finalArray = [];

console.log(fruit);
console.log("the last letter of array index 0 is " + fruit[0].slice(-1));
console.log("the last letter of array index 1 is " + fruit[1].slice(-1));

function lastLetterSort(stringArray) {
  
  for (var i = 0; i < fruit.length; i++) {
    myTempArray.push(fruit[i].split('').reverse('').join(''));
  }
  console.log("this is the myTempArray before sorting " + myTempArray);
  
  myTempArray.join();
  myTempArray.sort();

  for (var i = 0; i < myTempArray.length; i++) {
    finalArray.push(myTempArray[i].split('').reverse('').join(''));
  }
  console.log("this is the FINAL array sorting " + finalArray);

  fruit = []; //empty our original array so we can push our array items in the sorted list we are looking for
  console.log("original fruit array as empty " + fruit);

  fruit.push(finalArray); //push our sorted items to our original array
  console.log("original fruit array with the new SORTED VALUES " + fruit);
}

lastLetterSort(fruit);
// console.log("when array is sorted " + fruit);
// console.log(myTempArray);



// if (stringArray.slice(-1) > stringArray.slice(-2)) {
  //   console.log("this is -1 slicer " + stringArray.slice(-1));
  //   return 1;
  // } else if (stringArray.slice(-1) < stringArray.slice(-2)) {
  //   return -1;
  // } else {
  //   return 0;
