export default function createIteratorObject(report) {
  const departments = Object.values(report.allEmployees);
  let currentDepartmentIndex = 0;
  let currentEmployeeIndex = 0;

  const iterator = {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      if (currentEmployeeIndex < departments[currentDepartmentIndex].length) {
        const result = {
          value: departments[currentDepartmentIndex][currentEmployeeIndex],
          done: false,
        };
        currentEmployeeIndex += 1;
        return result;
      }

      if (currentDepartmentIndex < departments.length - 1) {
        currentDepartmentIndex += 1;
        currentEmployeeIndex = 0;
        return this.next();
      }

      return { done: true };
    },
  };

  return iterator;
}
