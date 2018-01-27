var Hero = require('./hero.js');

var Hero = function(name, favFood, health) {
  this.name = name;
  this.favFood = favFood;
  this.health = health;
  this.tasks = []

}

module.exports = Hero;
