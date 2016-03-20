import chai from 'chai';
let expect = chai.expect;

let makeStack = (capacity ) => {
  let currentSize = 0;
  let isEmpty = () => true;
  let pop = () => currentSize--;
  let push = () => currentSize++;
  let size = () => currentSize;

  return {
    isEmpty: isEmpty,
    pop: pop,
    push: push,
    size: size
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

  it('handle overflow', () => {
    let stack = makeStack();
    stack.push();
    expect(stack.push).to.not.throw(Error, /stack overflow/);
    stack.push();
    expect(stack.push).to.not.throw(Error, /stack overflow/);
    stack.push();
    expect(stack.push).to.throw(Error, /stack overflow/);
  });

});
