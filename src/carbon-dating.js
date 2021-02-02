const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  const a = MODERN_ACTIVITY / +sampleActivity;
  const k = 0.693 / HALF_LIFE_PERIOD;
  const terms = sampleActivity && typeof sampleActivity === 'string' && sampleActivity.length > 0 && sampleActivity > 0 && sampleActivity < 15;

  return terms ? Math.ceil(Math.log(k / a)) : false
};
