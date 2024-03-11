export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // Getter and setter for the brand attribute
  get brand() {
    return this._brand;
  }

  set brand(value) {
    this._brand = value;
  }

  // Getter and setter for the motor attribute
  get motor() {
    return this._motor;
  }

  set motor(value) {
    this._motor = value;
  }

  // Getter and setter for the color attribute
  get color() {
    return this._color;
  }

  set color(value) {
    this._color = value;
  }

  // Method to clone the car object
  cloneCar() {
    // Create a unique Symbol to mark the cloned object
    const symbolKey = Symbol('Car');
    const clonedCar = Object.assign(Object.create(Object.getPrototypeOf(this)), this);
    Object.defineProperty(clonedCar, symbolKey, { value: true });
    return clonedCar;
  }
}
