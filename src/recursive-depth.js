const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth( arr ) {
    let [counter, maxDepth] = [0, 1]
    arr.forEach((item) => {
      if (Array.isArray(item)) {
        counter = this.calculateDepth(item) + 1;
        counter > maxDepth ? maxDepth = counter : maxDepth
      }
    })
    return maxDepth
  }
};
