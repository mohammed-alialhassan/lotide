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

const assertArraysEqual = function (arr1, arr2) {
if(eqArrays(arr1,arr2)) {
console.log(`😎😎😎 Assertion Passed: ${arr1} === ${arr2}`)
} else if (!eqArrays(arr1, arr2)) {
console.log(`😓😓😓 Assertion Failed: ${arr1} !== ${arr2}`)
} 
}

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

assertArraysEqual(middle([1, 3, 5, 7, 9]), [5]);
assertArraysEqual(middle([4, 30]), [ ]);
assertArraysEqual(middle([1, 2, 3]), [2]) // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) , [6, 8]) // => [3]
