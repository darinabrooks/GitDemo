//First paramenter  - Test suite name
//Second parameter - function (function will have test (it blocks))
describe('Chain Locator Demo', function() {
  //First paramenter is test case name
  //Second argument is function
  it('Open Angular js website', function() {
    browser.get('http://juliemr.github.io/protractor-demo/');
    //repeater, chain locators, css for identical tags
    element(by.model('first')).sendKeys('3');
    element(by.model('second')).sendKeys('5');
    element(by.id('gobutton')).click();
    expect(element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText()).toBe('8');
    // element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function(text){
    //   console.log(text);
    // });
    //This code will click on the 4 item in a dropdrow list
    element(by.model("operator")).element(by.css("option:nth-child(4)")).click();
  });
});
