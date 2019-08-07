//First paramenter  - Test suite name
//Second parameter - function (function will have test (it blocks))
describe('Protractor Frames', function() {
  //First paramenter is test case name
  //Second argument is function
  it('Get text from iFrame', function() {
    browser.waitForAngularEnabled(false);
    //The following code will maximize the browser
    browser.driver.manage().window().maximize();
    browser.get('http://qaclickacademy.com/practice.php').then(function(){
      browser.sleep(5000);
    });
    //The following code switches to an iFrame on the web page
    browser.switchTo().frame("courses-iframe");
    element(by.css("a[href*='sign_in']")).getText().then(function(text){
      console.log(text);
    });


  });


});
