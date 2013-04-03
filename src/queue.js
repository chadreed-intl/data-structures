var makeQueue = function(){
  var queue = {};
  var storage = {}; // You'll use an object with numeric keys to store queue
                    // elements, since using an Array would defeat the purpose.
  var size = 0;
  var counter = 0;

  // fill out these methods
  queue.add = function(input){
    storage[size] = input;
    size ++;
  };

  queue.remove = function(){
    if (size-counter > 0){
      counter ++;
      return storage[counter-1];
    } else {
      return null;
    }
  };

  queue.size = function(){
    return size-counter;
  };

  return queue;
};
