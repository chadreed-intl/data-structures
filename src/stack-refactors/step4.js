

var Stack = function(){
  //var this = Object.create(Stack.prototype);
  this._storage = {}; 
  this._counter = 0;

  //return this;
};

Stack.prototype = {

  add: function(input){
    this._storage[this._counter] = input;
    this._counter ++;
  },

  remove: function(){
    if (this._counter > 0){
      this._counter --;
      return this._storage[this._counter];
    } else {
      return null;
    }
  },

  size: function(){
    return this._counter;
  }

};