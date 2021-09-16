const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😎😎😎 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😓😓😓 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {
   if (arr1.length >= arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  } else if (arr1.length < arr2.length) {
    for (let i = 0; i < arr2.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }
};

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

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(cd, dc), true);
assertEqual(eqObjects(cd, cd2) , false);