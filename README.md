## Shorter Technical Test JS

This test is designed to work seamlessly on different browsers and devices. The page behaviour changes whether you are logged in as a member or not.

[Not in scope]
This test is not required to test the logged-in state of the page. It is only focused on pages that are linked to from this page (i.e. only test the functionality on this page https://www.which.co.uk/reviews/televisions)	

[Automation For Television Home Page](https://www.which.co.uk/reviews/televisions)

### Requirement

- [Node.js](https://nodejs.org/en/download/) installed;
- Its need to have the [Java Development Kit (JDK)](https://www.oracle.com/technetwork/java/javase/downloads/index.html) installed to run the standalone Selenium Server.

### To set up

- Three scenarios were created and are available in the television.feature.
- Run ```npm install``` to install dependencies;
- Run ```webdriver-manager update``` to install the helper that download the browsers and instance of Selenium.

### Technologies used

I used the technologies below:

* [Protractor](https://www.protractortest.org/#/): Protractor is an end-to-end test framework. Protractor runs tests against your application running in a real browser, interacting with it as a user would;
* [CucumberJS](https://github.com/cucumber/cucumber-js): Cucumber is a tool for running automated tests written in plain language. Because they're written in plain language, they can be read by anyone on your team. Because they can be read by anyone, you can use them to help improve communication, collaboration and trust on your team;

### Running tests

- Start the Selenium Server ```webdriver-manage start```

- Run the tests ```protractor conf.js```
