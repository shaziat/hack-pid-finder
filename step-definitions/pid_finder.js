const request = require('supertest');

const url = 'https://rms.api.bbc.co.uk/v2/experience/inline/play/';
module.exports = function () {

    this.Given(/^I query RMS API$/, () => helpers.loadPage(page.pidFinder.url, 1000));

    this.When(/^I extract PID$/, () => {
         let elemArray = driver.findElements(page.pidFinder.elements.musicPid);
        const elemArray = driver.findElements(page.pidFinder.elements.musicPid);
        return elemArray.then(function(elems) {
            return Promise.all(
                elems.map(function(elem) {
                    // all promises must be resolved
                    return elem.getText(); // map the elements' text to an array
                })
            )
                .then(function(text) {
                    console.log('The array Length is: ' + text.length);
                    console.log('The array is: ' + text);
                    return text; // return the text of the element
                });
        });
    });

    this.Then(/^I can see its available for at least more than twenty days$/, async function () {
        const arr = ['b0080x5m', 'm000qc5m', 'm000qbhr'];
        arr.forEach(async(pid) => {
            await request(url)
                .get(pid)
                .expect('Content-Type', /json/)
                .then((response) => {
                    console.log(response.status);
                    if (response.status === 200) {
                        response.body.data.forEach((data) => {
                            data.data.forEach((innerData) => {

                                if (innerData) {
                                    const availablity = innerData.availability;
                                    if (availablity) {
                                        const toDateString = availablity.to;

                                        const currentDate = new Date();
                                        const toDate = new Date(toDateString);
                                        var time = Math.floor((toDate - currentDate) / (24 * 3600 * 1000));

                                        if (time > 20) {
                                            console.log('this pid availability for ' + time + 'days');
                                        }
                                        else {
                                            console.log('this pid availability for ' + time + 'days');
                                        }
                                    }
                                }

                            });
                        });
                    }

                });
        });
    });
};
