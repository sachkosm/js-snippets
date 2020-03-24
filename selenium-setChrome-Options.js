var webdriver = require('selenium-webdriver');

var chromeCapabilities = webdriver.Capabilities.chrome();
//setting chrome options to start the browser fully maximized
var chromeOptions = {
    'args': ['--test-type', '--start-maximized']
};
chromeCapabilities.set('chromeOptions', chromeOptions);
var driver = new webdriver.Builder().withCapabilities(chromeCapabilities).build();
