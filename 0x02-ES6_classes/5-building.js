export default class Building {
  // Constructor method to initialize the sqft attribute
  constructor(sqft) {
    if (typeof sqft !== 'number') throw new Error();
    this._sqft = sqft;
    this.evacuationWarningMessage();
  }

  // Getter method for sqft attribute
  get sqft() {
    return this._sqft;
  }

  // Setter method for sqft attribute
  set sqft(value) {
    this._sqft = value;
  }

  // Method to check if the subclass overrides evacuationWarningMessage
  evacuationWarningMessage() {
    if (this.constructor.name !== 'Building') {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }
}
