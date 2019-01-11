
const assert = require('assert');
const { Given, When, Then } = require('cucumber');
const engine = require('../../function');

Given('I want the menu', function(){
    this.request = 'menu'
});

When('I write menu', function() {
    this.actualAnswer = engine.sendMenu(this.request)
});

Then('I should receive the {string}', function(expectedAnswer) {
    assert.equal(this.actualAnswer, expectedAnswer)
});



