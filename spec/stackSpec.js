describe("stack", function() {
  var stack;

  beforeEach(function() {
    stack = makeStack();
  });

  xit('should have "add", "remove", and "size" methods', function() {
    expect(stack.add).toEqual(jasmine.any(Function));
    expect(stack.remove).toEqual(jasmine.any(Function));
    expect(stack.size).toEqual(jasmine.any(Function));
  });

  it('should have initialize with no values in it', function(){
    expect(stack.size()).toEqual(0);
  });
  it('should be able to have values added to it', function(){
    expect(stack.size()).toEqual(0);
    stack.add('dog');
    expect(stack.size()).toEqual(1);
  });
  it('should be able to have values unstacked', function(){
    stack.add('cat');
    expect(stack.remove()).toEqual('cat');
  });
  it('should unstack in the lifo');
  it('should be able to tell how many items are in the stack');

  // add more tests here to test the functionality of stack
});
