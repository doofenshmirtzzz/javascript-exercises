const palindromes = function (str) {
  let normString = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  let reversedString = normString.split('').reverse().join('');
  return normString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
