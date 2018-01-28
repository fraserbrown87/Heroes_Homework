const assert = require('assert');
const Food = require('../food.js');
const Hero = require('../hero.js');


describe('Food', function(){
  var food1;
  var food2;
  var food3;
  var hero1;
  var hero2;
  var hero3;
  var hero4;

  beforeEach(function(){
    food1 = new Food("Pizza", 50);
    food2 = new Food("Salad", 10);
    food3 = new Food("Kebab", 100);
    hero1 = new Hero("Donatello", "Pizza", 100);
    hero2 = new Hero("Leonardo", "Pizza", 100);
    hero3 = new Hero("Michelangelo", "Pizza", 100);
    hero4 = new Hero("Raphael", "Pizza", 100);
  })

  it('should have name', function(){
    assert.strictEqual(food1.name, "Pizza")
  })

  it('should have replenishment Value', function(){
    assert.strictEqual(food2.replenishment, 10);
  })
})
