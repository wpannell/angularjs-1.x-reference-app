import chai from 'chai';
let expect = chai.expect;

let stack = {
  isEmpty() {
    return true;
  },

  push() {
  },

  size() {
  }
};

describe('stack', () => {
  it('isEmpty()', () => {
    expect(stack.isEmpty()).to.equal(true);
  });

  it('push() leaves size === 1', () => {
    stack.push({});
    expect(stack.size()).to.equal(1);
  });
});
