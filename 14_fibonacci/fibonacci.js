const fibonacci = function(n) {
  const num = Number(n);
  if (num < 0) return "OOPS";
  if (num === 0) return 0;

  let prev = 0, curr = 1;

  for(let i = 1; i < num; i++) {
    next = prev + curr;
    prev = curr;
    curr = next;
  }

  return curr;
};

// Do not edit below this line
module.exports = fibonacci;
