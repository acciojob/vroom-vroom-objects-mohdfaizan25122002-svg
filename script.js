// Car Constructor
function Car(make, model) {
  this.make = make;
  this.model = model;
}

// Method on Car prototype
Car.prototype.getMakeModel = function () {
  return this.make + " " + this.model;
};

window.Car = Car;


// SportsCar Constructor
function SportsCar(make, model, topSpeed) {
  // Call Car constructor
  Car.call(this, make, model);

  this.topSpeed = topSpeed;
}

// Inherit prototype from Car
SportsCar.prototype = Object.create(Car.prototype);

// Reset constructor
SportsCar.prototype.constructor = SportsCar;

// SportsCar method
SportsCar.prototype.getTopSpeed = function () {
  return this.topSpeed;
};

window.SportsCar = SportsCar;


// Create object
let car = new SportsCar("Ferrari", "Testarossa", 200);

// Call methods
console.log(car.getMakeModel()); // Ferrari Testarossa
console.log(car.getTopSpeed());  // 200







