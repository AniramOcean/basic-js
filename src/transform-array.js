// const CustomError = require("../extensions/custom-error");

class Cases {
  constructor(array) {
    this.array = array
  }
  transformArray() {
    let result = [];

    this.array.forEach((item, idx) => {
      if (idx === 0 && (item === '--discard-prev' || item === '--double-prev')) return result
      if (idx === this.array.length - 1 && (item === '--discard-next' || item === '--double-next')) return result

      if (item === '--double-next') {
        result.push(this.array[idx + 1], this.array[idx + 1])
      }

      if (item === '--double-prev') {
        result.push(this.array[idx - 1])
      }

      if (item === '--discard-next') {
        if (this.array[idx + 2] === '--double-prev' || this.array[idx + 2] === '--discard-prev') {
          return result
        } else {
          return result
        }
      }

      if (item === '--discard-prev') {
        result.pop()
      }

      if (item !== '--double-next' && item !== '--double-prev' && item !== '--discard-next' && item !== '--discard-prev') result.push(item)
    }
  )
    return result;
  }

}

module.exports = function transform( arr ) {
  if (!(arr instanceof Array)) {
    throw new Error('argument is not Array');
  }
  const [discardNext, discardPrev, doubleNext, doublePrev] = ['--discard-next', '--discard-prev', '--double-next', '--double-prev']
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    let item = arr[i]
    let nextItem = (idx = 1) => arr[i + idx]
    let prevItem = (idx = 1) => arr[i - idx]

    switch (arr[i]) {
      case discardNext:
        i++;
        break;

      case discardPrev:
        if (result.length && prevItem(2) !== discardNext) result.pop();
        break;

      case doubleNext:
        if (i < arr.length - 1) result.push(nextItem());
        break;

      case doublePrev:
        if (i && prevItem(2) !== discardNext) result.push(prevItem());
        break;

      default:
        result.push(item);
    }
  }

  return result;
};
