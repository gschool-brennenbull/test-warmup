const countVowels = require('../main.js');
const {expect,assert} = require('chai');

describe ('countVowels', function() {
  it ('Should be a function', ()=>{
    assert.isFunction(countVowels, 'countVowels is not a function');
  });

  it ('Should return O if no arguments are given', ()=>{
    assert.equal(countVowels(), 0);
  })

  it ('Should ask for a string if argument is not a string', ()=>{
    assert.equal(countVowels([1,2,3,4]), 'not a string');
  });

  it ('Should return the number vowels in a given string, Y should not count', ()=>{
    assert.equal(countVowels('Brennen'), 2);
    assert.equal(countVowels('why'), 0);
  })
})
