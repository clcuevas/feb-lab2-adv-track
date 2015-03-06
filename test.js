var fruit = ["banana", "orange", "cherry", "apple", "watermelon", "grape", "strawberry", "kiwi", "blueberry"];
var dogBreeds = ["hound", "terrier", "akita", "retriever", "chihuahua", "shepherd", "pitbull", "eskimo", "beagle", "collie", "boxer", "bulldog"];

// console.log(fruit);
// console.log("the last letter of array index 0 is " + fruit[0].slice(-1));
// console.log("the last letter of array index 1 is " + fruit[1].slice(-1));

function lastLetterSort(stringArray) {
  var myTempArray = []; //hold array list after reversing
  var finalArray = []; //hold array list after reversing and sorting
  
  /*this loop will reverse the characters in each string (index[i]) of the array*/
  for (var i = 0; i < stringArray.length; i++) {
    myTempArray.push(stringArray[i].split('').reverse('').join(''));
  }
  console.log("this is the myTempArray before sorting " + myTempArray);
  
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
  console.log("this is the FINAL array sorting " + finalArray);

  /*empty our original array so we can push our array items in the sorted list we are looking for*/
  stringArray = [];
  console.log("original stringArray array as empty " + stringArray);

  /*push finalArray sorted items into the original array*/
  stringArray.push(finalArray);
  console.log("original stringArray array with the new SORTED VALUES " + stringArray);
}

fruit = lastLetterSort(fruit);
dogBreeds = lastLetterSort(dogBreeds);


