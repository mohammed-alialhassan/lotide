const { object } = require("joi");

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😎😎😎 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😓😓😓 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const findKeyByValue = function(object, value) { //function with parameters object and value
     
  let arrayOfKeys = Object.keys(object) //Object.keys will take all the keys of the object and make it into a nice array that you store in a variable for now
     for (let keys of arrayOfKeys) { //for of loop itering over every index in arrayOfKeys, which is equal to ^
       if (object[keys] === value) { //keys plugs in every Key from the object and tests if the value stored is equal to value given
             return keys //object[key] eventually subs the right key if its there and references that keys value, value and value given should match
       } //else will return undefined
     }
}
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);