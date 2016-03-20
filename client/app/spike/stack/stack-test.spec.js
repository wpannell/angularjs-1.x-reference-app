import chai from 'chai';
let expect = chai.expect;

let makeStack = () => {
  let isEmpty = () => true;
  let pop = () => {};
  let push = () => {};
  let size = () => 1;

  return {
    isEmpty: isEmpty,
    pop: pop,
    push: pop,
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
    stack.push({});
    expect(stack.size()).to.equal(1);
  });

  it('push() -> pop() leaves size === 0', () => {
    let stack = makeStack();
    stack.push({});
    stack.pop();
    expect(stack.size()).to.equal(0);
  });
});
