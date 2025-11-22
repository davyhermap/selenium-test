const { Builder, By, until } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const path = require("path");
const { Given, When, Then, AfterAll, BeforeAll } = require("@cucumber/cucumber");
const assert = require("assert");

let driver;

BeforeAll(async () => {
  const driverPath = path.join(__dirname, "../../drivers/chromedriver.exe");
  const service = new chrome.ServiceBuilder(driverPath);

  driver = await new Builder()
    .forBrowser("chrome")
    .setChromeService(service)
    .build();
});

AfterAll(async () => {
  if (driver) await driver.quit();
});

Given("user membuka halaman login SauceDemo", async () => {
  await driver.get("https://www.saucedemo.com/");
});

When("user memasukkan username {string}", async (username) => {
  await driver.findElement(By.id("user-name")).sendKeys(username);
});

When("user memasukkan password {string}", async (password) => {
  await driver.findElement(By.id("password")).sendKeys(password);
});

When("user menekan tombol login", async () => {
  await driver.findElement(By.id("login-button")).click();
});

Then("user berhasil melihat halaman inventory", async () => {
  await driver.wait(until.urlContains("inventory"), 10000);
  const url = await driver.getCurrentUrl();
  assert.ok(url.includes("inventory.html"));
});
