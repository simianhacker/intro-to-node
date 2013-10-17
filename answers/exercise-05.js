var count = 0;

module.exports.increment = function () {
  return count++;
};

module.exports.decrement = function () {
  return  count--;
};
