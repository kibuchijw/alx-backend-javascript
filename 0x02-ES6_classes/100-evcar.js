import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  // Getter and setter for the range attribute
  get range() {
    return this._range;
  }

  set range(value) {
    this._range = value;
  }

  // Override the cloneCar method to return a new instance of Car
  cloneCar() {
    // Create a new instance of Car with the same attributes
    const carClone = new Car(this.brand, this.motor, this.color);
    // Return the cloned Car object
    return carClone;
  }
}
