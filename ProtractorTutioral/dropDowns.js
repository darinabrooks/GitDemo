//First paramenter  - Test suite name
//Second parameter - function (function will have test (it blocks))
describe('All Locator', function() {
  function Calc(a, b,c) {
    element(by.model('first')).sendKeys(a);
    element(by.model('second')).sendKeys(b);
    element.all(by.tagName('option')).each(function(item) {
      item.getAttribute('value').then(function(value) {
       if (value== c){
         item.click();
       }
      });
    });
    element(by.id('gobutton')).click();
  }
  //First paramenter is test case name
  //Second argument is function
  it('All Locator', function() {
    browser.get('http://juliemr.github.io/protractor-demo/');

    Calc (3,5, 'MULTIPLICATION');
    Calc(3, 5, 'DIVISION');
    Calc(3, 5, 'MODULO');
    Calc(3, 5, 'SUBTRACTION');
    Calc(3, 5, 'ADDITION');

    element.all(by.repeater('result in memory')).each(function(item) {
      item.element(by.css('td:nth-child(3)')).getText().then(function(text) {
          console.log(text);
        });
    });

  });
});