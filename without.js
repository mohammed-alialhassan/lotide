const assertEqual = require('./assertEqual');

const eqArrays = require('./eqArrays');

const assertArraysEqual = require('./assertArraysEqual');

const without = function(source, itemToRemove) {
  let withoutArray = [];
  for (let index of source) {
    if (!itemToRemove.includes(index)) {
      withoutArray.push(index);
    }
  }
  return withoutArray;
}

module.exports = without

