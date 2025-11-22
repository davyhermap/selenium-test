Feature: Login SauceDemo

  Scenario: Login dengan user standard_user
    Given user membuka halaman login SauceDemo
    When user memasukkan username "standard_user"
    And user memasukkan password "secret_sauce"
    And user menekan tombol login
    Then user berhasil melihat halaman inventory
