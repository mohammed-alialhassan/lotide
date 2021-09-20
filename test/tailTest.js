const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it (`returns Labs for ["Yo Yo", "Lighthouse", "Labs]`, () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  })
})
/*
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);

const example1 = [5];
assertEqual(example1.length, 1);
const example2 = [];
assertEqual(example2.length, 0); */
