const Cart = function() {
  this.items = [];
  this.total = function() {
    return this.items.reduce((acc, item) => {
      return acc + parseFloat(item.price.slice(1));
    }, 0);
  }
  
  this.addItem = function(item) {
    this.items.push(item);
  }
  this.clearAll = function() {
    this.items = [];
  }
  this.count = function() {
    return this.items.length;
  }
  
};


