@stations
Feature: All Stations Page
  AS a user
  I WANT to navigate to the Stations page
  So THAT I can see and access all logos and content on all stations page

  Background:
    Given I am on the BBC Sounds All Stations page

  @todo @part2
    Scenario: Sounds logo takes user back to the Sounds Homepage
    When I select the Sounds logo
    Then I am taken to Sounds Homepage

  @todo @part2
  Scenario: Hover state on Network logos
    When I hover over each of the Network logos
    Then I see orange line underneath the logos