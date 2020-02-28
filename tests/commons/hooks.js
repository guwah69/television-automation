let { After, Before } = require('cucumber');


After(async function(scenario) {
    if (scenario.result.status === 'failed') {
        const screenShot = await browser.takeScreenshot();
        this.attach(screenShot, "image/png");
    } else {
        const screenShot = await browser.takeScreenshot();
        this.attach(screenShot, "image/png");
    }
});
