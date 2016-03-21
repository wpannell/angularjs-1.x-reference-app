import {expect} from 'chai';

let primeFactorsOf = number => {
  const factors = [];
  if (number > 1) factors.push(2);
  return factors;
};

describe('prime factors', () => {
  expect(primeFactorsOf(1)).to.deep.equal([]); //null —> constant transformation

  expect(primeFactorsOf(2)).to.deep.equal([2]); //var —> constant transformation
                                                //split flow transformation
});
