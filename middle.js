const eqArrays = require('./eqArrays');

const assertArraysEqual = require('./assertArraysEqual');

const middle = function(arr1) {
  let arr2 = [];
  let middleEquation = arr1[Math.floor(arr1.length/2)];
 
  if (arr1.length <= 2) {
    return arr2;
  }

  if (arr1.length % 2 === 1) {
    arr2.push(middleEquation)
    return arr2;

  } if (arr1.length % 2 === 0) {
     arr2.push(middleEquation)
     arr2.push(arr1[middleEquation + 1])
     return arr2;
  }
} 

module.exports = middle
