let specPage = require('./television.page-object');

let chai = require('chai');
let chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
let expect = chai.expect;
let {setDefaultTimeout} = require('cucumber');
setDefaultTimeout(60 * 1200);


Before(function(){
    specPage.init();
});

Given('Customer go to {string}', function(url) {
    specPage.get(url);
});

When(/^Page title is "([^"]*)"$/, function(pageTitle) {
    expect(browser.getTitle())
        .to.eventually.equal(pageTitle)
        .and.notify();
});

Then('Sort by pricing', function () {
    return specPage.sortByPrice();
});
