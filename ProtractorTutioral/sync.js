//First paramenter  - Test suite name
//Second parameter - function (function will have test (it blocks))
describe('Protractor Synchronization', function() {

  //First paramenter is test case name
  //Second argument is function
  it('Open non-angular js website sync', function() {
    browser.waitForAngularEnabled(false);
    browser.get('http://www.itgeared.com/demo/1506-ajax-loading.html');
    element(by.css("a[href*='loadAjax']")).click();
//The following code waits for  the loading image to go invisible.  It will wait for 8 seconds for it to go invisible.  If it goes invisible before 8 seconds it will move on.
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.invisibilityOf(element(by.id("loader"))), 8000);
    element(by.id("results")).getText().then(function(text){
      console.log(text);
    });

  });


});
