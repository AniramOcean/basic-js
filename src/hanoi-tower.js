const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi( disksNumber, turnsSpeed ) {
    const turnsSpeedInSeconds = turnsSpeed / (60 * 60);
    const turns = Math.pow(2, disksNumber) - 1;
    const seconds = Math.floor(turns / turnsSpeedInSeconds);

    return {turns, seconds}
};
