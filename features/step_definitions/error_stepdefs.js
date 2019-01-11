const assert = require('assert');
const { Given, When, Then } = require('cucumber');
const engine = require('../../function');

Given('I want to see error message', function(){
    this.request = 'qwerty'
});

When('I write qwerty', function() {
    this.actualAnswer = engine.sendError(this.request)
});

Then('I should receive the {string}', function(expectedAnswer) {
    assert.equal(this.actualAnswer, expectedAnswer)
});
