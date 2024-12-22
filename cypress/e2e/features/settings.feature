Feature: Settings Component

  Scenario: Toggling a setting
    Given the user is on the homepage
    When the user opens the Settings menu
    And toggles the setting
    Then the setting should be "Enabled"
    When the user toggles the setting again
    Then the setting should be "Disabled"

  Scenario: Persisting the setting state
    Given the user is on the homepage
    When the user opens the Settings menu
    And toggles the setting
    And reloads the page
    Then the setting should still be "Enabled"
