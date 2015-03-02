var population = 1000;

function Blob(consumption) {
	this.consumption = consumption;

	return this.consumption;
}

Blob.prototype.newTown = function(population, peoplePerHour) {
	this.population = population;
  this.peoplePerHour = peoplePerHour; //rate

  var hoursToOoze = 0;

  for (var i = blob.consumption; i <= this.population; i+=this.peoplePerHour) {
    blob.consumption += this.peoplePerHour;
    this.peoplePerHour++;
    hoursToOoze += 1;
    console.log("my rate " + this.peoplePerHour + " and my total hours " + hoursToOoze + " AND consumption " + blob.consumption);
  }

  return hoursToOoze;//#of hours the blob needs to ooze its way
}


var blob = new Blob(0); //instance of Blob
console.log(blob.newTown(1000, 1));

// function consumeDowington() {
// 	// var peopleConsumed = 0;
// 	var rate = 0;

// 	for (var i = blob.consumption; i < population; i+=rate) {
// 		rate++;
// 		blob.consumption += rate;
// 		hoursSpentInDowington += 1;
// 		console.log(blob.consumption + " people consumed at " + hoursSpentInDowington + " hour");
// 	}
// 	return hoursSpentInDowington;
// }

// var hoursSpentInDowington = 0; //value = 45 after running function
// //blob.consumption holds a value of 1035 after function runs
// consumeDowington();
// console.log(hoursSpentInDowington + " hours spent");


