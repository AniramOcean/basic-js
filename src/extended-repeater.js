const CustomError = require("../extensions/custom-error");

module.exports = function repeater( str, options ) {
  let {repeatTimes, separator = '+', addition, additionRepeatTimes, additionSeparator = '|'} = options

  str = str !== undefined ? String(str) : ''
  addition = addition !== undefined ? String(addition) : ''

  const result = Array(repeatTimes)
      .fill(str)
      .map(i => (additionRepeatTimes) ? `${i}${Array(additionRepeatTimes).fill(addition).join(additionSeparator)}` : `${i}`)
      .join(separator)

  return !repeatTimes ? `${str}${addition}` : result
};
