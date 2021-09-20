const assertEqual = require('./assertEqual');

const tail = function(arr) {
  let head = [];
  for (let i = 0; i < arr.length; i++) {
    if (i !== 0) {
      head.push(arr[i]);
    }
  }
  return head;
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(words));
assertEqual(words.length, 3);
/*
const example1 = [5];
assertEqual(example1.length, 1);
const example2 = [];
assertEqual(example2.length, 0);
*/
module.exports = tail 
