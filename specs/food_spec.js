var assert = require('assert');
var Food = require('../food.js');

describe('Food', function(){
  var food1;
  var food2;
  var food3;

  beforeEach(function(){
    food1 = new Food("Pizza", 50);
    food2 = new Food("Salad", 10);
    food3 = new Food("Kebab", 100);
  })

  it('should have name', function(){
    assert.strictEqual(food1.name, "Pizza")
  })

  it('should have replenishment Value', function(){
    assert.strictEqual(food2.replenishment, 10);
  })
})
