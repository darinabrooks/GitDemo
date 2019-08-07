//First paramenter  - Test suite name
//Second parameter - function (function will have test (it blocks))
describe('Protractor baby steps', function() {
  //First paramenter is test case name
  //Second argument is function
  it('Open Angular js website',function() {
    browser.get("https://angularjs.org");
    browser.get('').then(function(){
      //browser.sleep(5000);
      console.log('This is the last step to execute');

    });

  });


  it('close browser', function() {


  });
});
