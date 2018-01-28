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

Hero.prototype.eatFavFood = function (food1) {
  if (food1.name === this.isFavFood) {
    this.health += (food.replenishment * 1.5)
  }
  else this.heal += food.replenishment;
};

Hero.prototype.addTask = function (task) {
  this.tasks.push(task);

};

module.exports = Hero;
