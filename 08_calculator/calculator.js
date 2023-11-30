const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (a) {
  return a.reduce((arg, item) => {
    return arg + item
  }, 0)
};

const multiply = function (a) {
  return a.reduce((arg, item) => {
    return arg * item
  }, 1)
};

const power = function (a, b) {

  if (b === 0) return 1

  let power = a
 
  while (b > 1) {
   power *= a;
   b--;
  }

  return power
};

// this is clearly problematic, cause of the default return value
const factorial = function (n) {
  if (n === 0) return 1
  let arrOfNum = []

  while (n > 1) {
  arrOfNum.push(n);
  n--;
  }

  return arrOfNum.reduce((arg, item) => {
    return arg * item
  }, 1)

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
