//First paramenter  - Test suite name
//Second parameter - function (function will have test (it blocks))
describe('Protractor practice exercise', function() {
  //Take all of the cards into list
  var total = [];
  function selectItem(product) {
    element.all(by.tagName('app-card')).each(function(item) {
      item.element(by.css("h4[class='card-title'] a")).getText().then(function(text) {
          if (text == product) {
            item.element(by.css("button[class='btn btn-info']")).click();
          }
        });
    });
  }
  it('practice exercise', function() {
    browser.driver.manage().window().maximize();
    browser.get('https://qaclickacademy.github.io/protocommerce/');

    element(by.name('name')).sendKeys('Darin Brooks');
    //element(by.name('email')).sendKeys('darinabrooks@test.com');
    element(by.css("input[name='email']")).sendKeys('darinabrooks@test.com');
    element(by.id('exampleInputPassword1')).sendKeys('Zxcvbnm1');
    element(by.css("input[type='checkbox']")).click();
    element(by.cssContainingText("[id='exampleFormControlSelect1'] option", 'Female')).click();
    element.all(by.name('inlineRadioOptions')).first().click();
    element(by.name('bday')).sendKeys('09231966').then(function() {
        browser.sleep(1000);
      });
    //element(by.css("input[type='submit']")).click().then(function(){
    element(by.buttonText('Submit')).click().then(function() {
        //This code verifies the success ALERT (i.e. message)
        element(by.css("div[class='alert alert-success alert-dismissible']")).getText().then(function(text) {
            console.log(text);
          });
      });
    //This code clears the text box
    element(by.name('name')).clear();
    element(by.name('name')).sendKeys('D').then(function() {
        browser.sleep(1000);
      });
    //This code verifies the error message
    element(by.css("div[class='alert alert-danger']")).getText().then(function(text) {
        console.log(text);
      });
    //This code verifies that there is no warning message
    element(by.name('name')).sendKeys('Darin Brooks');
    element.all(by.css("div[class='alert alert-danger']")).count().then(function(text) {
        console.log('The count is equal to ' + text);
      });

    //The following click on the Shop button
    //element(by.css("a[href='/protocommerce/shop']")).click();
    element(by.linkText('Shop')).click();

    selectItem('Samsung Note 8');
    selectItem('iphone X');
    element(by.partialLinkText('Checkout')).getText().then(function(text) {
        var res = text.split('('); //create a variable called res, put the text into the variable and remove all characters before and including the (
        var x = Number(res[1].trim().charAt(0)); //to convert a string to an integer wrap the variable in Number
        var y = x + 1;
        console.log(y);
        expect(res[1].trim().charAt(0)).toBe('2'); //trim the white space from the value in res, get the character at position 0, expect the value to be 2
        browser.sleep(1000);
      });

    element(by.partialLinkText('Checkout')).click();
    element.all(by.css("button[class='btn btn-danger'")).count().then(function(text) {
        console.log('There are ' + text + ' items in your shopping cart');
      });
    element.all(by.css('td:nth-child(4) strong')).each(function(element, index) {
      element.getText().then(function(text) {
        var priceStr = JSON.stringify(text);
        //console.log("The value of priceStr is "+priceStr);
        var price = priceStr.replace(/[^a-zA-Z0-9 ]/g, '');
        //console.log("The value of price is "+price);
        //price[1].trim().charAt(0);
        //console.log("The value of price after trim is "+price);
        var priceNum = Number(price);
        total.push(priceNum);
        //console.log("The value of priceNum is "+priceNum);
        // console.log('The the length of the total array is ' + total.length);
        //console.log(total);
        var myTotal = 0;
        for (var i = 0, len = total.length; i < len; i++) {
          myTotal += total[i];
        }
        console.log(myTotal);

      });

    });

  });

});

