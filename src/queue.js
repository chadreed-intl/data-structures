var makeQueue = function(){
  var queue = {};
  var storage = {}; 
  var size = 0;
  var counter = 0;

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
