
//First paramenter  - Test suite name
//Second parameter - function (function will have test (it blocks))
describe('Protractor Alert Steps', function() {
  //First paramenter is test case name
  //Second argument is function
  it('Open Non-Angular website Alerts',function() {
    browser.waitForAngularEnabled(false);
    browser.get('http://qaclickacademy.com/practice.php').then(function(){
      browser.sleep(5000);
    });
    element(by.id('confirmbtn')).click().then(function(){
      browser.sleep(5000);
    });
    //The following code switches to an alert pop-up and clicks OK button.
    //accept - positive answer (i.e. yes, ok)
    //dismiss - negative answer (i.e. no, cancel)
    browser.switchTo().alert().accept().then(function(){
      browser.sleep(5000);
    });


    });


})