  //First paramenter is test case name
  //Second argument is function
describe('Protractor Actions', function() {

  it('Open Posse Website',function() {
    browser.get('https://posse.com');
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
      element(by.css("a[ng-href*='London/River Island']")).click()

        //The following code will get the window handles of all of the open handles
        browser.getAllWindowHandles().then(function(handles){
          //The following code will switch to the child window of the parent.  Handle 0 is the parent.
          browser.switchTo().window(handles[1]);

          browser.getTitle().then(function(title){
            console.log(title+ " is the title of the child page after switching from the partent page");
          });
        });


    });


  });

})