@pid_finder
Feature: Sounds pid_finder 
  AS a team member
  I WANT to extract active pids
  So THAT I can see all avaliable pids with tracks 
  @slice1
  Scenario: Verify PID with tracks is extracted as required
    Given I query RMS API
    When I extract PID
    Then I can see its available for at least more than twenty days
    And I can see PID has atleast thirteen Tracklists with ellipses
    And I can see PID has coming Up Next with at least 2 items
    #And I can see PID works outside UK on BS
    #And I can see next item in the playQ should have tracklist 
    #And I can see the items in the tracklists should have Track Now playing equalizer
