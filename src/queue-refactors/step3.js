 var queueMethods ={ 

  add: function(input){
    this._storage[this._size] = input;
    this._size ++;
  },

  remove: function(){
    if (this._size - this._counter > 0){
      this._counter ++;
      return this._storage[this._counter-1];
    } else {
      return null;
    }
  },

  size: function(){
    return this._size - this._counter;
  } 
  
};

var makeQueue = function(){
  var queue = Object.create(queueMethods);
  queue._storage = {}; 
  queue._size = 0;
  queue._counter = 0;
  return queue;
};
