import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    if (typeof floors !== 'number') throw new Error();
    super(sqft);
    this._floors = floors;
    this._sqft = sqft;
  }

  // Getter and setter for sqft attribute
  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    this._sqft = value;
  }

  // Getter and setter for floors attribute
  get floors() {
    return this._floors;
  }

  set floors(value) {
    this._floors = value;
  }

  // Override the evacuationWarningMessage method
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
