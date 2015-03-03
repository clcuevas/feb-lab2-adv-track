function assert(expression, failureMessage) {
  if(!expression) {
    console.log("assertion failure: ", failureMessage);
  }
}

var population = 1000;

function Blob() {
  // this.consumption = consumption;

  // return this.consumption;
}

var blob = new Blob(); //instance of Blob
var consumeDowingtonHours = 0; //hold hours

function consumeDowington() {
  var rate = 0;

  for (var i = this.consumption; i <= population; i+=rate) {
    this.consumption += rate;
    rate++;
    consumeDowingtonHours++;
    console.log(this.consumption + " people consumed at " + consumeDowingtonHours + " hour");
  }
  return consumeDowingtonHours;
}

var hoursSpentInDowington = consumeDowingtonHours;

console.log(consumeDowington());

Blob.prototype.hoursToOoze = hoursToOoze;

function hoursToOoze(population, peoplePerHour) {
  // this.population = population;
  // this.peoplePerHour = peoplePerHour; //rate
  var consumption = 0;
  var hoursTotal = 0;

  for(var i = peoplePerHour; i <= population; i+=peoplePerHour) {
    consumption += peoplePerHour;
    peoplePerHour++;
    hoursTotal++;
    console.log("my rate " + peoplePerHour + " and my total hours " + hoursTotal + " AND consumption " + consumption);
  }
  console.log(hoursTotal + " hours spent consuming population");
  return hoursTotal;
}

assert(blob.hoursToOoze(0, 1) === 0, "no people means no time needed.");
assert(blob.hoursToOoze(1000, 1) === hoursSpentInDowington,
  "hoursSpentInDowington should match hoursToOoze\"s result for 1000");
