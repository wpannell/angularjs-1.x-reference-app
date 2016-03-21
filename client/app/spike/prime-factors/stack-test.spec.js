import {expect} from 'chai';

let primeFactorsOf = number => {
  let n = number;
  const factors = [];

  if (n > 1) {
    for (; n % 2 === 0; n /= 2) factors.push(2);
    for (; n % 3 === 0; n /= 3) factors.push(3);
  }

  if (n > 1) factors.push(n);
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

  expect(primeFactorsOf(9)).to.deep.equal([3, 3]);
});
