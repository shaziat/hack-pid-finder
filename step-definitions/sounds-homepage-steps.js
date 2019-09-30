module.exports = function () {

    this.Given(/^I am on the BBC Sounds Homepage$/, () => {
        /* Load the Sounds Homepage */
        return helpers.loadPage(page.soundsHomepage.url, 1000);
    });

    this.When(/^I select the ‘Listen’ logo$/, () => {
        /* Find the listen logo and click on it */
        return driver.findElement(page.soundsHomepage.elements.listenLogo).click();
    });

    this.Then(/^I am on the Sounds Homepage$/, () => {
        /* Assert listen live module is present(this would prove we are on Sounds Homepage) */
        return driver.findElement(page.soundsHomepage.elements.listenLiveModule);
    });

    this.Then(/^I can see Radio One logo$/, () => {
        /* Find Radio One logo */
        return driver.findElement(page.soundsHomepage.elements.radioOne);
    });

    this.Then(/^I can see Radio Two logo$/, () => {
        /* Find Radio Two logo */
        return driver.findElement(page.soundsHomepage.elements.radioTwo);
    });

    this.When(/^I click the ‘Stations’ link$/, () => {
        /* Find Stations link and click on it */
        return driver.findElement(page.soundsHomepage.elements.stationsLink).click();
    });

    this.Then(/^I am on the ‘Stations’ page$/, () => {
        /* Get the current url and verify it is equal to https://www.bbc.co.uk/sounds/stations */
        return driver.getCurrentUrl().then(function (value) {
            expect(value).to.equal(page.soundsHomepage.url + '/stations');
        });
    });

    this.Then(/^I see 17 network station logos$/, () => {
        /* Find all the stations and store the count in variable numberOfStations and verify the value */
        return driver.findElements(page.soundsHomepage.elements.stationsLogos).then((numberOfStations) => {
            return expect(numberOfStations.length).to.be.equal(17);
        });
    });

    this.When(/^I select Hip Hop Category$/, () => {
        /* Find Hip Hop Category and click on it */
        driver.findElement(page.soundsHomepage.elements.hiphopCategory).click();
        /* Waiting for the page to load to be able to capture the url for next step */
        return driver.sleep(1000);
    });

    this.Then(/^I am on ‘Hip Hop’ Category page$/, () => {
        /* Get the current url and verify it contains /category/music-hiphoprnbanddancehall */
        return driver.getCurrentUrl().then(function (value) {
            expect(value).to.contain('/category/music-hiphoprnbanddancehall');
        });
    });

    this.Then(/^I see Category page is sorted by popular$/, () => {
        /* Get the current url and verify it contains sort=popular */
        return driver.getCurrentUrl().then(function (value) {
            expect(value).to.contain('sort=popular');
        });
    });
};
