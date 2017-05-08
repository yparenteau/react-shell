const coverage = require('ts-jest/coverageprocessor');
const junit = require('jest-junit');

module.exports = function () {
  coverage.apply(this, arguments);
  return junit.apply(this, arguments);
};
