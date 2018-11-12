const primeNums = require('./getPrimeNums');

describe('getPrimeNums to return an array of prime numbers', () => {
  test('pass the number 2 to return [2,3]', () => {
    expect(primeNums(2)).toEqual([2,3]);
  }); 
  test('pass the number 6 to return [2,3,5,7,11,13]', () => {
    expect(primeNums(6)).toEqual([2,3,5,7,11,13]);
  }); 
});
describe('getPrimeNums defaults to 10 numbers', () => {
  test('pass a negative number and returns []', () => {
    expect(primeNums(-1)).toEqual([]);
  }); 
  test('no values passed expect to return [2,3,5,7,11,13]', () => {
    expect(primeNums()).toEqual([2,3,5,7,11,13,17,19,23,29]);
  }); 
}); 

