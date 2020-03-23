const webdriver = require('selenium-webdriver')
const By = webdriver.By

const driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

driver.get('http://localhost:9001');

driver.sleep(3000).then(async () => {

    var dateBox = await driver.findElement(By.id("cobDate"))

    // Temporary remove readOnly
    await driver.executeScript((dateBox) => {
        dateBox.removeAttribute('readonly', 'readonly')
    }, dateBox)
    
    // Set the date
    await dateBox.sendKeys("09252013");

    //Reverse readOnly
    await driver.executeScript((dateBox) => {
        dateBox.setAttribute('readonly', 'readonly')
    }, dateBox)

    //Proceed with the submittion of the report request
})
