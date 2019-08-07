//First paramenter  - Test suite name
//Second parameter - function (function will have test (it blocks))

describe('Protractor Element Demo', function() {
  var obj = require('./jsObjectDemo.js');
  var using = require('jasmine-data-provider');
  var d = require('./data.js');
  beforeEach(function() {
    obj.getURL();
  });
  //in the code below data stores actual data
  //description stores sub object name (i.e. FirstData, SecondData, ThirdData) drom the data.js file
  //for every iteration one data set is picked
  using(d.DataDriven, function(data, description) {
    it('Testing Calculator Functionality' +  ' - ' + description, function() {
      obj.firstinput.sendKeys(data.firstinput);
      obj.secondinput.sendKeys(data.secondinput);
      obj.goButton.click();
      browser.sleep(2000);

      expect(obj.result.getText()).toBe(data.result);

      obj.result.getText().then(function(text) {
        console.log('The value = ' + text);
      });
    });
    afterEach(function() {
      console.log('Test is completed!');
    });
  });
});
