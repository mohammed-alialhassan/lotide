const assertEqual = require('./assertEqual');

const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  const object1KeysArray = Object.keys(object1);
  const object2KeysArray = Object.keys(object2);
  let foundMatch = true;
  if  (object1KeysArray.length !== object2KeysArray.length) {
    return false;
  } else {
    for (let object1key of object1KeysArray) {
      if (!object2[object1key]){
        return false
      }
      if(Array.isArray(object1[object1key])) {
        if(!eqArrays(object1[object1key], object2[object1key])){return false}
      } else {
        if (object1[object1key] !== object2[object1key]) {
          return false
        }
      }
    }
    return foundMatch;
  }
};

module.exports = eqObjects