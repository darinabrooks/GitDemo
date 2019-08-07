//First paramenter  - Test suite name
//Second parameter - function (function will have test (it blocks))
describe('All Locator', function() {
  function Add(a,b){
    element(by.model('first')).sendKeys(a);
    element(by.model('second')).sendKeys(b);
    element(by.id('gobutton')).click();
  }
  //First paramenter is test case name
  //Second argument is function
  it('All Locator', function() {
    browser.get('http://juliemr.github.io/protractor-demo/');
    Add(2,3);
    Add(4,3);
    Add(5,3);
    Add(6,3);
    Add(7,3);
    element.all(by.repeater("result in memory")).count().then(function(text) {
         console.log(text);
       });
       element.all(by.repeater("result in memory")).each(function(item){
          item.element(by.css('td:nth-child(3)')).getText().then(function(text) {
              console.log(text);
            });
       });
  });
});
