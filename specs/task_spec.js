const assert = require('assert');
const Task = require('../task.js');

describe('Task', function(){
  var task1;

  beforeEach(function(){
    task1 = new Task("Hardcore", "Maximum", "Full Pizza");
  })

  it('task should have difficulty level', function(){
    assert.strictEqual(task1.difficulty, "Hardcore");
  })

  it('task should hae a urgency level', function(){
    assert.strictEqual(task1.urgency, "Maximum");
  })

  it('task should have a reward', function(){
    assert.strictEqual(task1.reward, "Full Pizza");
  })

  it('task should start uncomplete', function(){
    assert.strictEqual(task1.completed, false);
  })

  it('should be able to complete', function(){
    task1.completeTask()
    assert.strictEqual(task1.completed, true);
  })
})
