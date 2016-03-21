import {expect} from 'chai';

let primeFactorsOf = number => {
  let n = number;
  const factors = [];

  for (let divisor = 2; n > 1; divisor++) {
    for (; n % divisor === 0; n /= divisor) factors.push(divisor);
  }

  return factors;
};

describe('prime factors', () => {
  expect(primeFactorsOf(1)).to.deep.equal([]); //null —> constant transformation

  expect(primeFactorsOf(2)).to.deep.equal([2]); //constant —> var transformation
                                                //split flow transformation

  expect(primeFactorsOf(3)).to.deep.equal([3]); //constant —> var transformation

  expect(primeFactorsOf(4)).to.deep.equal([2, 2]); // 2 split flow transformations

  expect(primeFactorsOf(5)).to.deep.equal([5]);
  expect(primeFactorsOf(6)).to.deep.equal([2, 3]);
  expect(primeFactorsOf(7)).to.deep.equal([7]);

  expect(primeFactorsOf(8)).to.deep.equal([2, 2, 2]); // if -> while transformation

  expect(primeFactorsOf(9)).to.deep.equal([3, 3]); // if -> while
});
