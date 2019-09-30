@homepage
Feature: Sounds Homepage
  AS a user
  I WANT to navigate to the Sounds page
  So THAT I can see and access all logos and content in one place

  Background:
    Given I am on the BBC Sounds Homepage

  @part1
  Scenario: Radio 1 and Radio 2 logos are displayed in the Listen Live module the Sounds Homepage
    When I select the ‘Listen’ logo
    Then I am on the Sounds Homepage
    And I can see Radio One logo
    And I can see Radio Two logo

  @part1
  Scenario: Verify network station logos are displayed on the Stations page
    When I click the ‘Stations’ link
    Then I am on the ‘Stations’ page
    And I see 17 network station logos

  @part1
  Scenario: Selecting the Hip Hop category from the Categories module on the Sounds Homepage
    When I select Hip Hop Category
    Then I am on ‘Hip Hop’ Category page
    And I see Category page is sorted by popular

  @todo @part2
  Scenario: Listen live carousel takes user to the next available stations
    When I click on the right carousel arrow in listen live module
    Then I can see the next available stations
    And I can navigate to see all the 19 stations

  @todo @part2
  Scenario: Sounds logo takes user back to the Listen page
    When I am on any page on BBC Sounds website
    Then I see Sounds logo on every page
    When I select the Sounds logo
    Then I am taken to Sounds Homepage

  @todo @part2
  Scenario: Hover over network logo on the Stations page shows an orange line underneath

  3.	Mouse over network logo on the Stations page shows an orange line underneath

  •	There should be an hover state (orange line underneath) on network logos available in All Stations Page - https://www.bbc.co.uk/sounds/stations


