const findTheOldest = function(arr) {
  const currentYear = new Date().getFullYear();

  let oldest = arr[0];

  function getAge(e) {
    if ('yearOfDeath' in e) {
      return e.yearOfDeath - e.yearOfBirth;
    } else {
      return currentYear - e.yearOfBirth;
    }
  }

  for (e of arr) {
    if (getAge(oldest) < getAge(e)) oldest = e;
  }

  return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
