const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  count = 0;
  arr.flat().forEach(item => item === '^^' ? count++ : count)
  return count;
};
