
var stackMethods = {

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
  },

};

var makeStack = function(){
  var stack = Object.create(stackMethods);
  stack._storage = {}; 
  stack._counter = 0;

  return stack;
};