import chai from 'chai';
let expect = chai.expect;

let makeStack = (capacity = 3) => {
  let currentSize = 0;
  let isEmpty = () => true;

  let pop = () => {
    currentSize--;
  };

  let push = () => {
    if (capacity === currentSize) throw new Error('stack overflow');
    currentSize++;
  };

  let size = () => currentSize;

  return {
    isEmpty: isEmpty,
    pop: pop,
    push: push,
    size: size,
    capacity: capacity
  };
};

describe('stack', () => {
  it('isEmpty()', () => {
    let stack = makeStack();
    expect(stack.isEmpty()).to.equal(true);
  });

  it('push() leaves size === 1', () => {
    let stack = makeStack();
    stack.push();
    expect(stack.size()).to.equal(1);
  });

  it('push() -> pop() leaves size === 0', () => {
    let stack = makeStack();
    stack.push();
    stack.pop();
    expect(stack.size()).to.equal(0);
  });

  describe('handle overflow', () => {
    it('doesn\'t throw', () => {
      let stack = makeStack();
      stack.push();
      expect(stack.push).to.not.throw(Error, /stack overflow/);
    });

    it('doesn\'t throw again', () => {
      let stack = makeStack();
      stack.push();
      stack.push();
      expect(stack.push).to.not.throw(Error, /stack overflow/);
    });

    it('does finally throw', () => {
      let stack = makeStack();
      stack.push();
      stack.push();
      stack.push();
      expect(stack.push).to.throw(Error, /stack overflow/);
    });
  });

  it('handle underflow', () => {
    let stack = makeStack();
    stack.pop();
    expect(stack.pop).to.throw(Error, /stack underflow/);
  });
});
