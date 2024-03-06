# 0x00. ES6 Basics

| Task                                                           | File                                                         |
| -------------------------------------------------------------- | ------------------------------------------------------------ |
| 0. Const or let?                                               | [0-constants.js](./0-constants.js)                           |
| 1. Block Scope                                                 | [1-block-scoped.js](./1-block-scoped.js)                     |
| 2. Arrow functions                                             | [2-arrow.js](./2-arrow.js)                                   |
| 3. Parameter defaults                                          | [3-default-parameter.js](./3-default-parameter.js)           |
| 4. Rest parameter syntax for functions                         | [4-rest-parameter.js](./4-rest-parameter.js)                 |
| 5. The wonders of spread syntax                                | [ 5-spread-operator.js](./5-spread-operator.js)              |
| 6. Take advantage of template literals                         | [6-string-interpolation.js](./6-string-interpolation.js)     |
| 7. Object property value shorthand syntax                      | [7-getBudgetObject.js](./7-getBudgetObject.js)               |
| 8. No need to create empty objects before adding in properties | [8-getBudgetCurrentYear.js](./8-getBudgetCurrentYear.js)     |
| 9. ES6 method properties                                       | [9-getFullBudget.js](./9-getFullBudget.js)                   |
| 10. For...of Loops                                             | [10-loops.js](./10-loops.js)                                 |
| 11. Iterator                                                   | [11-createEmployeesObject.js](./11-createEmployeesObject.js) |
| 12. Let's create a report object                               | [12-createReportObject.js](./12-createReportObject.js)       |
| 13. Iterating through report objects                           | [100-createIteratorObject.js](./100-createIteratorObject.js) |
| 14. Iterate through object                                     | [101-iterateThroughObject.js](./101-iterateThroughObject.js) |

## Tasks

### 0. Const or let?

- Modify
  - function `taskFirst` to instantiate variables using `const`
  - function `taskNext` to instantiate variables using `let`

```
export function taskFirst() {
  var task = 'I prefer const when I can.';
  return task;
}

export function getLast() {
  return ' is okay';
}

export function taskNext() {
  var combination = 'But sometimes let';
  combination += getLast();

  return combination;
}
```

### 1. Block Scope

Given what you’ve read about `var` and hoisting, modify the variables inside the function `taskBlock` so that the variables aren’t overwritten inside the conditional block.

```
export default function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = true;

  if (trueOrFalse) {
    var task = true;
    var task2 = false;
  }

  return [task, task2];
}
```

### 2. Arrow functions

Rewrite the following standard function to use ES6’s arrow syntax of the function `add` (it will be an anonymous function after)

```
export default function getNeighborhoodsList() {
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  const self = this;
  this.addNeighborhood = function add(newNeighborhood) {
    self.sanFranciscoNeighborhoods.push(newNeighborhood);
    return self.sanFranciscoNeighborhoods;
  };
}
```

### 3. Parameter defaults

Condense the internals of the following function to 1 line - without changing the name of each function/variable.

_Hint_: The key here to define default parameter values for the function parameters.

```
export default function getSumOfHoods(initialNumber, expansion1989, expansion2019) {
  if (expansion1989 === undefined) {
    expansion1989 = 89;
  }

  if (expansion2019 === undefined) {
    expansion2019 = 19;
  }
  return initialNumber + expansion1989 + expansion2019;
}
```

### 4. Rest parameter syntax for functions

Modify the following function to return the number of arguments passed to it using the rest parameter syntax

```
export default function returnHowManyArguments() {

}
```

### 5. The wonders of spread syntax

Using spread syntax, concatenate 2 arrays and each character of a string by modifying the function below. Your function body should be one line long.

```
export default function concatArrays(array1, array2, string) {
}
```

### 6. Take advantage of template literals

Rewrite the return statement to use a template literal so you can the substitute the variables you’ve defined.

```
export default function getSanFranciscoDescription() {
  const year = 2017;
  const budget = {
    income: '$119,868',
    gdp: '$154.2 billion',
    capita: '$178,479',
  };

  return 'As of ' + year + ', it was the seventh-highest income county in the United States'
        / ', with a per capita personal income of ' + budget.income + '. As of 2015, San Francisco'
        / ' proper had a GDP of ' + budget.gdp + ', and a GDP per capita of ' + budget.capita + '.';
}
```

### 7. Object property value shorthand syntax

Notice how the keys and the variable names are the same?
Modify the following function’s `budget` object to simply use the keyname instead.

```
export default function getBudgetObject(income, gdp, capita) {
  const budget = {
    income: income,
    gdp: gdp,
    capita: capita,
  };

  return budget;
}
```

### 8. No need to create empty objects before adding in properties

Rewrite the `getBudgetForCurrentYear` function to use ES6 computed property names on the `budget` object

```
function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const budget = {};

  budget[`income-${getCurrentYear()}`] = income;
  budget[`gdp-${getCurrentYear()}`] = gdp;
  budget[`capita-${getCurrentYear()}`] = capita;

  return budget;
}
```

### 9. ES6 method properties

Rewrite `getFullBudgetObject` to use ES6 method properties in the `fullBudget` object

```
import getBudgetObject from './7-getBudgetObject.js';

export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  const fullBudget = {
    ...budget,
    getIncomeInDollars: function (income) {
      return `$${income}`;
    },
    getIncomeInEuros: function (income) {
      return `${income} euros`;
    },
  };

  return fullBudget;
}
```

### 10. For...of Loops

Rewrite the function `appendToEachArrayValue` to use ES6’s `for...of` operator. And don’t forget that `var` is not ES6-friendly.

```
export default function appendToEachArrayValue(array, appendString) {
  for (var idx in array) {
    var value = array[idx];
    array[idx] = appendString + value;
  }

  return array;
}
```

### 11. Iterator

- Write a function named `createEmployeesObject` that will receive two arguments:
  - `departmentName` (String)
  - `employees` (Array of Strings)

```
export default function createEmployeesObject(departmentName, employees) {

}
```

The function should return an object with the following format:

```
{
     $departmentName: [
          $employees,
     ],
}
```

### 12. Let's create a report object

Write a function named `createReportObject` whose parameter, `employeesList`, is the return value of the previous function `createEmployeesObject`.

```
export default function createReportObject(employeesList) {

}
```

`createReportObject` should return an object containing the key `allEmployees` and a method property called `getNumberOfDepartments`.

`allEmployees` is a key that maps to an object containing the department name and a list of all the employees in that department. If you’re having trouble, use the spread syntax.

The method property receives `employeesList` and returns the number of departments. I would suggest suggest thinking back to the ES6 method property syntax.

```
{
  allEmployees: {
     engineering: [
          'John Doe',
          'Guillaume Salva',
     ],
  },
};
```

### 13. Iterating through report objects

Write a function named `createIteratorObject`, that will take into argument a report Object created with the previous function `createReportObject`.

This function will return an iterator to go through every employee in every department.

```
export default function createIteratorObject(report) {

}
```

### 14. Iterate through object

Finally, write a function named `iterateThroughObject`. The function’s parameter `reportWithIterator` is the return value from `createIteratorObject`.

```
export default function iterateThroughObject(reportWithIterator) {

 }
```

It should return every employee name in a string, separated by `|`

```
{
  allEmployees: {
     engineering: [
          'John Doe',
          'Guillaume Salva',
     ],
  },
  ...
};
```

Should return `John Doe | Guillaume Salva`
Reminder - the functions will be _imported_ by the test suite.
