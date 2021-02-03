const CustomError = require("../extensions/custom-error");
function season(date) {
  const season = ['winter', 'spring', 'summer', 'fall'];
  let month = date.getUTCMonth();

  switch (month) {
    case 0:
    case 1:
    case 11:
      return season[0]
    case 2:
    case 3:
    case 4:
      return season[1]
    case 5:
    case 6:
    case 7:
      return season[2]
    case 8:
    case 9:
    case 10:
      return season[3]
    default: Error()
  }

}

module.exports = function getSeason(date) {
    const noDate = 'Unable to determine the time of year!';
    let isDate = !!(date) && typeof date === 'object';
    return isDate ? season(date) : noDate
};
