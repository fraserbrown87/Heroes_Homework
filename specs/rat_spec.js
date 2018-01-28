const assert = require('assert');
const Rat = require('../rat');
const Food = require('../food');

describe('Rat', function() {
  let rat;
  let food;

  beforeEach(function() {
    rat = new Rat();
    food = new Food('Cheeseburger', 20);
  })

  it('rat can poison food', function() {
    rat.touch(food);
    assert.strictEqual(food.poisonous, true);
  })

})
