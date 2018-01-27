var Task = require('./task.js');

var Task = function(difficultyLevel, urgencyLevel, reward){
  this.difficulty = difficultyLevel;
  this.urgency = urgencyLevel;
  this.reward = reward;
  this.completed = false;
}

module.exports = Task;