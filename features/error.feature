Feature: Error
    AS a user 
    I WANT to be able to see an error message 
    SO THAT i can see that the bot doesn't understand

    Scenario: I want to see error message
        Given I want to see error message
        When I write qwerty
        Then I should receive 'Jeg forstå desværre ikke hvad du mener'