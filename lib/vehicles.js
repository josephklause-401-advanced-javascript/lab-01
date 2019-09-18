class Vehicle {
  constructor(name, wheels) {
    this.name = name;
    this.wheels = wheels;
  }

  drive() {
    return 'Moving Forward';
  }

  stop() {
    return 'Stopping';
  }

  Car(name) {
    this.name = name;
    this.wheels = 4;
  }

  Motorcycle(name) {
    this.name = name;
    this.wheels = 2;
    // wheelie() {
    //   return 'Wheee!';
    // };
  }
}

// const Motorcycle = new Vehicle(Motorcycle, 2)

// const Vehicle = function(name, wheels) {
//   this.name = name;
//   this.wheels = wheels;
// };

// Vehicle.prototype.drive = () => {
//   return 'Moving Forward';
// };

// Vehicle.prototype.stop = () => {
//   return 'Stopping';
// };


// Car Constructor
const Car = function(name) {
  Vehicle.call(this, name, 4);
};

Car.prototype = new Vehicle();

//motorcycle constructor
const Motorcycle = function(name) {
  Vehicle.call(this, name, 2);
};

Motorcycle.prototype = new Vehicle();

Motorcycle.prototype.wheelie = () => {
  return 'Wheee!';
};

module.exports = { Vehicle };
