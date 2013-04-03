describe("queue", function() {
  var queue;

  beforeEach(function() {
    queue = makeQueue();
  });

  it('should have "add", "remove", and "size" methods', function() {
    expect(queue.add).toEqual(jasmine.any(Function));
    expect(queue.remove).toEqual(jasmine.any(Function));
    expect(queue.size).toEqual(jasmine.any(Function));
  });

  it('should initialize with a size of 0', function(){
    expect(queue.size()).toEqual(0);
  });

  it('should add a value to the queue', function(){
    queue.add('dog');
    expect(queue.size()).toEqual(1);
  });

  describe('.remove', function(){
    it('should remove using fifo', function(){
      queue.add('dog');
      queue.add('cat');
      expect(queue.remove()).toEqual('dog');
      queue.add('other');
      expect(queue.remove()).toEqual('cat');
    });
    
    it('should not decrement the size if there are no elements', function(){
      expect(queue.size()).toEqual(0);
      queue.remove();
      expect(queue.size()).toEqual(0);
    });
    
    it('should return null if remove is called with no elements', function(){
      expect(queue.remove()).toBe(null);
    });
  });
  

  it('should tell the size of the queue', function(){
    queue.add('thing');
    queue.add('stuff');
    queue.add('other');
    expect(queue.size()).toEqual(3);
  })

  // add more tests here to test the functionality of queue
});
