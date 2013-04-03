var makeStack = function(){
  var stack = {};
  var storage = {}; // You'll use an object with numeric keys to store queue
                    // elements, since using an Array would defeat the purpose.
  var size = 0;

var stackMethods = {
  // fill out these methods
  add: function(input){
    storage[size] = input;
    size ++;
  };

  remove:function(){
    if (size > 0){
      size --;
      return storage[size];
    } else {
      return null;
    }
  };

  size: function(){
    return size;
  };

};

  return stack;
};
