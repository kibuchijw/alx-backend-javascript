export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  // Check if the endpoint has been queried before
  if (!weakMap.has(endpoint)) {
    // If not, initialize the counter to 1
    weakMap.set(endpoint, 1);
  } else {
    // If it has been queried, increment the counter
    const count = weakMap.get(endpoint) + 1;
    weakMap.set(endpoint, count);

    // Check if the number of queries is greater than or equal to 5
    if (count >= 5) {
      // If it is, throw an error
      throw new Error('Endpoint load is high');
    }
  }
}
