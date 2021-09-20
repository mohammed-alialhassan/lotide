const { object } = require("joi");

const assertEqual = require('./assertEqual');


const findKeyByValue = function(object, value) { //function with parameters object and value
     
  let arrayOfKeys = Object.keys(object) //Object.keys will take all the keys of the object and make it into a nice array that you store in a variable for now
     for (let keys of arrayOfKeys) { //for of loop itering over every index in arrayOfKeys, which is equal to ^
       if (object[keys] === value) { //keys plugs in every Key from the object and tests if the value stored is equal to value given
             return keys //object[key] eventually subs the right key if its there and references that keys value, value and value given should match
       } //else will return undefined
     }
}

module.exports = findKeyByValue