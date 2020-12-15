module.exports = function () { 

    this.Given(/^I query RMS API$/, () => {
        return helpers.loadPage(page.pidFinder.url, 1000);
      });
};