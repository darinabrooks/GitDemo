  //First paramenter is test case name
  //Second argument is function
describe('Window Alerts', function() {

  it('Open Posse Website',function() {
    browser.get('http://posse.com');
    element(by.model("userInputQuery")).sendKeys("river");
    //The following key moves the mouse into a textbox.
    browser.actions().mouseMove(element(by.model("locationQuery")).sendKeys("London")).perform();
    //The following key moves the arrow down on a auto-complete pop-up menu
    browser.actions.sendKeys(protractor.Key.ARROW_DOWN).perform();
    //The following code clicks the enter key on the keyboard
    browser.actions.sendKeys(protractor.key.ENTER).perform().then(function(){
      browser.sleep(5000);

      //The following code get a count of the search results
      expect(element.all(by.css("div[ng-mouseover*='onSearchResultsOver']")).count()).toEqual(7);
      //The following code selects the 1st search result
      element.all(by.css("div[ng-mouseover*=''onSearchResultsOver']")).get(0).click();
      element(by.css("a[ng-href*='London/River Island']")).click().then(function(){
        browser.sleep(5000);
      });

    });

  });

})