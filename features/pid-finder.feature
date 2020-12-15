@pid_finder
Feature: Sounds pid_finder 
  AS a team member
  I WANT to extract active pids
  So THAT I can see all avaliable pids with tracks 
  @slice1
  Scenario: Radio 1 and Radio 2 logos are displayed in the Listen Live module the Sounds Homepage
    Given I query RMS API
    When I extract PID
    Then I am on the single pid aod playspace page
    And I can see PID works outside UK on BS
    And I can see PID has Tracklists (with ellipses as expected)
    And I can see PID has coming Up Next with at least 2 items
    And I can see its available for at least more than 20-25 days
    And I can see there are Next & Previous buttons (both enabled) in the PID
    And I can see next item in the playQ should have tracklist 
    And I can see the items in the tracklists should have Track Now playing equalizer
  