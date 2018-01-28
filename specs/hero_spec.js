const assert = require('assert');
const Hero = require('../hero.js');
const Food = require('../food.js');

describe('Hero', function(){
  var hero1;
  var hero2;
  var hero3;
  var hero4;
  var food1;
  var food2;
  var food3;

  beforeEach(function(){
    hero1 = new Hero("Donatello", "Pizza", 100);
    hero2 = new Hero("Leonardo", "Pizza", 100);
    hero3 = new Hero("Michelangelo", "Pizza", 100);
    hero4 = new Hero("Raphael", "Pizza", 100);
    food1 = new Food("Pizza", 50);
    food2 = new Food("Salad", 10);
    food3 = new Food("Kebab", 100);
  })

  it('should have a name', function(){
    assert.strictEqual(hero1.name, "Donatello");
  })

  it('should have favourite food', function(){
    assert.strictEqual(hero2.favFood, "Pizza");
  })

  it('should have health bar', function(){
    assert.strictEqual(hero3.health, 100);
  })

  it('tasks should start empty', function(){
    assert.strictEqual(hero4.tasks.length, 0);
  })

  it('hero can talk', function(){
    assert.strictEqual(hero2.canTalk(), `Hey, my name is Leonardo, cowabunga dude!`)
  })

  it('can eat food', function(){
    hero1.eatFood(food2);
    assert.strictEqual(hero1.health, 110);
  })

  it('check if favourite food', function(){
    assert.strictEqual(hero2.isFavFood(food1), true);
  })
})
