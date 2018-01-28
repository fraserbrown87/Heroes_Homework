const Hero = function(name, favFood, health) {
  this.name = name;
  this.favFood = favFood;
  this.health = health;
  this.tasks = []

}

Hero.prototype.canTalk = function () {
  return `Hey, my name is ${this.name}, cowabunga dude!`
};

Hero.prototype.eatFood = function (salad) {
  this.health += salad.replenishment;
};

Hero.prototype.isFavFood = function (food1) {
  return food1.name === this.favFood ? true : false;
};

module.exports = Hero;
