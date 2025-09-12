const removeFromArray = function(arr, ...arg) {
  return arr.filter((e) => !(arg.includes(e)));
};

// Do not edit below this line
module.exports = removeFromArray;
