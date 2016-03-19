import chai from 'chai';
let expect = chai.expect;

let stack = {
  isEmpty() {
    return true;
  }
};

describe('stack', () => {
  it('isEmpty()', () => {
    expect(stack.isEmpty()).to.equal(true);
  });
});
