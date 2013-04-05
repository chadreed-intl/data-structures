var Queue = function(){
  //var queue = Object.create(queueMethods);
  this._storage = {}; 
  this._size = 0;
  this._counter = 0;
 
  //return this;
};


Queue.prototype = { 

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

