const CustomError = require("../extensions/custom-error");


const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length - 1
  },
  addLink(value) {
    String(value) ? this.arr.push(`( ${String(value)} )`) : this.arr.push(`'(  )'`)
    return this
  },
  removeLink(position) {
    if (!position || typeof position !== 'number' || position < 0 || position > this.getLength()) {
      this.arr = []
      throw new Error()
    }

    this.arr.splice(position - 1, 1)
    return this
  },
  reverseChain() {
    this.arr.reverse()
    return this;
  },
  finishChain() {
    const result = this.arr.join('~~')
    this.arr = []
    return result
  }
};

module.exports = chainMaker;
