const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(a) {
  return a.reduce((sum, e) => sum + e, 0);
};

const multiply = function(a) {
  return a.reduce((res, e) => res * e, 1); 
};

const power = function(a, b) {
  return a ** b;
};

const factorial = function(a) {
  let result = 1;

  for (let i = 1; i <= a; i++) {
    result *= i;
  }
  
  return result;
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
