export default function createInt8TypedArray(length, position, value) {
  // Check if the position is within the range of the typed array
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  // Create a new ArrayBuffer with the specified length
  const buffer = new ArrayBuffer(length);
  const newView = new DataView(buffer, 0, length);

  // Create a new Int8Array from the buffer
  const int8Array = new Int8Array(buffer);

  // Set the value at the specified position in the Int8Array
  int8Array[position] = value;

  return newView;
}
