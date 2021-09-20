const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const takeUntil = function(array, callback) {
  let slicePoint = "";
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      slicePoint = i;
      newArray = array.slice(0, slicePoint);
      return newArray;
    }
  }
};

module.exports = takeUntil