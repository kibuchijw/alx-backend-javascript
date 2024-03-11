export default class HolbertonCourse {
  // Constructor method to initialize the class attributes
  constructor(name, length, students) {
    // Assign the provided values to the corresponding attributes
    this.name = name;
    this.length = length;
    this.students = students;
  }

  // Getter and setter for the 'name' attribute
  get name() {
    return this._name;
  }

  set name(val) {
    // Check if the provided value is a string
    if (typeof val !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = val;
  }

  // Getter and setter for the 'length' attribute
  get length() {
    return this._length;
  }

  set length(val) {
    // Check if the provided value is a number
    if (typeof val !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = val;
  }

  // Getter and setter for the 'students' attribute
  get students() {
    return this._students;
  }

  set students(val) {
    // Check if the provided value is an array
    if (!Array.isArray(val)) {
      throw new TypeError('Students must be an array');
    }
    // Iterate through each element of the array
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < val.length; i++) {
      // Check if each element is a string
      if (typeof val[i] !== 'string') {
        throw new TypeError('Students must be an array of strings');
      }
    }
    this._students = val;
  }
}
