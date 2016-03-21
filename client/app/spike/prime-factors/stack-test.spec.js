import {expect} from 'chai';

let primeFactorsOf = number => {
  const factors = [];
  if (number > 1) factors.push(number);
  return factors;
};

describe('prime factors', () => {
  expect(primeFactorsOf(1)).to.deep.equal([]); //null —> constant transformation

  expect(primeFactorsOf(2)).to.deep.equal([2]); //constant —> var transformation
                                                //split flow transformation

  expect(primeFactorsOf(3)).to.deep.equal([3]); //constant —> var transformation

  expect(primeFactorsOf(4)).to.deep.equal([2, 2]);
});
