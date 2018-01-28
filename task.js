const Task = function(difficultyLevel, urgencyLevel, reward){
  this.difficulty = difficultyLevel;
  this.urgency = urgencyLevel;
  this.reward = reward;
  this.completed = false;
}

Task.prototype.completeTask = function () {
  this.completed = true;

};

module.exports = Task;
