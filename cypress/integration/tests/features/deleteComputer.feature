@deleteComputer
Feature: Delete Computer after filter

    Feature Description

    Scenario: Delete Computers
        Given the website is accessed
        And type into Search Field the Computer name
        When click on the button "Filter by name"
        Then will be listed computers that match
        When click on the computer name to be deleted
        And click on the Delete This Computer button
        Then a delete confirmation message will be displayed
           