var Food = require('./food.js');

var Food = function(name, replenishmentValue){
  this.name = name;
  this.replenishment = replenishmentValue;
}

module.exports = Food;
