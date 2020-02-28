
'use strict';

let pageTitle;

module.exports = {
    init: () => {
        browser.waitForAngularEnabled(false);
        pageTitle = element(by.tagName('title'));

    },

    get: (url) => {
        return browser.get(url);
    },

    sortByPrice: async (sort) => {
        let options = await element(by.id('product_listing_sorter')).
        all(by.tagName('option'));

        options[2].click('selected');
    },

};
