export default class Airport {
  constructor(name, code) {
    if (typeof name !== 'string' || typeof code !== 'string') throw new Error();
    this._name = name;
    this._code = code;
  }

  // Getter and setter for name attribute
  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  // Getter and setter for code attribute
  get code() {
    return this._code;
  }

  set code(value) {
    this._code = value;
  }

  // Symbol.toStringTag to customize default string representation
  get [Symbol.toStringTag]() {
    return this.code;
  }
}
