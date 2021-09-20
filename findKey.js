const assertEqual = require('./assertEqual');

//need to make a function called findKey, needs 2 parameters: object and callback

const findKey = function (object, callback) {
  let result = undefined;
  //It needs to scan the object's keys (for in loop)
  for (let key in object) {
//the FIRST key that returns true with the callback function should be returned
    if (callback(object[key])) {
      return key;
    }
  }
};

module.exports = findKey



