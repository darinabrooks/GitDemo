var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
exports.config = {
  //framework: 'jasmine',
  //directConnect: true,
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['elementBasics.js'],
  //capabilities: {
  //browserName: 'chrome'
  //},
  onPrepare: function() {
    //browser.waitForAngularEnabled(false);
    browser.driver.manage().window().maximize();
    jasmine.getEnv().addReporter(
      new Jasmine2HtmlReporter({
        savePath: 'target/screenshots'
      })
    );
  },
  suites: {
    smoke: ['chainLocators.js','dropDowns.js'],
    regression:'elementBasics.js'
  },
  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true // Use colors in the command line report.
  }
};
