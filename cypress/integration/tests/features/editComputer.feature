@editComputer
Feature: Edit computer specifications

    Feature Description

    Scenario: Edit Computer
        Given the website is accessed
        And type into Search Field the Computer name
        When click on the button "Filter by name"
        Then will be listed computers that match
        When click on the computer name to be edited
        Then will be showed up four fields to edit
        When edit the computer and click on the Save this computer button
        Then the message Done ! Computer ACE has been updated should be displayed
        