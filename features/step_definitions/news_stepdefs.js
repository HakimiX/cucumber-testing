const assert = require('assert');
const { Given, When, Then } = require('cucumber');
const engine = require('../../function');

Given('I want the nyheder', function(){
    this.request = 'nyheder'
});

Given('I want klummer', function() {
    this.request = 'klummer'
})

Given('I want podcasts', function(){
    this.request = 'podcast'
})

Given('I want kalender', function(){
    this.request = 'kalender'
})

Given('I want debatter', function(){
    this.request = 'debatter'
})

Given('I want trending', function(){
    this.request = 'trending'
})

Given('I want inger støjberg', function(){
    this.request = 'inger støjberg'
})


// ---------------------------------------------------

When('I write nyheder', function() {
    this.actualAnswer = engine.sendNews(this.request)
});

When('I write klummer', function() {
    this.actualAnswer = engine.sendColumns(this.request)
});

When('I write podcast', function() {
    this.actualAnswer = engine.sendPodcast(this.request)
});

When('I write kalender', function() {
    this.actualAnswer = engine.sendKalender(this.request)
});

When('I write debatter', function() {
    this.actualAnswer = engine.sendDebates(this.request)
});

When('I write trending', function() {
    this.actualAnswer = engine.sendTrending(this.request)
});

When('I write inger støjberg', function() {
    this.actualAnswer = engine.sendPerson(this.request)
});



// ---------------------------------------------------

Then('I should receive {string}', function(expectedAnswer) {
    assert.equal(this.actualAnswer, expectedAnswer)
});

