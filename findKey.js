const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😓😓😓 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const object = {
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
};

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

const results1 = findKey(object, x => x.stars === 2);

const results2 = findKey(object, x => x.stars === 0);

assertEqual(results1, "noma");

assertEqual(results2, undefined);



