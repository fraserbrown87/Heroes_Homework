var assert = require('assert');
var Hero = require('../hero.js');

describe('Hero', function(){
  var hero1;
  var hero2;
  var hero3;
  var hero4;

  beforeEach(function(){
    hero1 = new Hero("Donatello", "Pizza", 100);
    hero2 = new Hero("Leonardo", "Pizza", 100);
    hero3 = new Hero("Michelangelo", "Pizza", 100);
    hero4 = new Hero("Raphael", "Pizza", 100);
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
})
