Feature: News
    AS a user 
    I WANT to be able to request different types of news by text
    SO THAT i can see latest news

    Scenario: I want the nyheder
        Given I want the nyheder
        When I write nyheder
        Then I should receive 'Seneste nyheder'
 
    Scenario: I want klummer
        Given I want klummer
        When I write klummer
        Then I should receive 'Seneste klummer'
 
    Scenario: I want podcasts
        Given I want podcasts
        When I write podcast
        Then I should receive 'Seneste podcast'

    Scenario: I want debatter
        Given I want debatter
        When I write debatter
        Then I should receive 'Seneste debatter'

    Scenario: I want trending
        Given I want trending
        When I write trending
        Then I should receive 'Mest læste artikler'

    Scenario: I want kalender
        Given I want kalender
        When I write kalender
        Then I should receive 'Seneste begivenheder'
 
    Scenario: I want inger støjberg
        Given I want inger støjberg
        When I write inger støjberg
        Then I should receive 'Inger Støjberg'