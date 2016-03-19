import chai from 'chai';
let expect = chai.expect;

let stack = {
  isEmpty() {
    return true;
  },

  push() {
  },

  size() {
    return 1;
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

  it('push() -> pop() leaves size === 0', () => {
    stack.push({});
    stack.pop();
    expect(stack.size()).to.equal(0);
  });
});
