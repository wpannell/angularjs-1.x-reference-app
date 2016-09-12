import {R} from '../../test-helper';
let {curry} = R;

describe('ramda demo', () => {
  it('curry', () => {
    let addThree = curry((a, b, c) => a + b + c);

    (addThree(1)(2)(3)).should.equal(6);
    (addThree(1, 2)(3)).should.equal(6);
    (addThree(1)(2, 3)).should.equal(6);
    (addThree(1, 2, 3)).should.equal(6);
  });
});
