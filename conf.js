'use strict';
exports.config = {
    directConnect: true,
//Running chrome
    Capabilities: { browserName: 'chrome'
    },
//point spec to feature file , my feature file was under feature folder
    specs: [
        './tests/features/*.feature'     // Specs here are the cucumber feature files
    ],
//set framework options
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    // baseUrl: 'https://www.which.co.uk/reviews/televisions',

//Create html report
    onComplete: () => {
        let reporter = require('cucumber-html-reporter');
        let options = {
            theme: 'bootstrap',
            jsonFile: './results.json',
            // output: './results.html',
            reportSuiteAsScenarios: true,
            launchReport: true,
            metadata: {
                "App Version":"0.3.2",
                "Test Environment": "STAGING",
                "Browser": "Chrome  54.0.2840.98",
                "Platform": "Windows 10",
                "Parallel": "Scenarios",
                "Executed": "Remote"
            },
            output: './report/cucumber_report.html',
        };
        reporter.generate(options);
    },
//set cucumber options
    cucumberOpts: {
        require: [
            './tests/e2e/**/*.spec.js',
            './tests/commons/hooks.js'
        ],  // require step definition files before executing features
        tags: [],                      // <string[]> (expression) only execute the features or scenarios with tags matching the expression
        strict: true,                  // <boolean> fail if there are any undefined or pending steps
        'dry-run': false,              // <boolean> invoke formatters without executing steps
        compiler: [],                   // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
        format: 'json:results.json',    //make sure you are not using multi-capabilities
    },
    onPrepare: function () {
        browser.waitForAngularEnabled(true);
        browser.driver.manage().window().maximize();

        const {Given, Then, When, Before} = require('cucumber');
        global.Given = Given;
        global.When = When;
        global.Then = Then;
        global.Before = Before;
    },
    SELENIUM_PROMISE_MANAGER: false,
};
