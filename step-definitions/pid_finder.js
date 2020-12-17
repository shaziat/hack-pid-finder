const request = require('supertest');
const url = 'https://rms.api.bbc.co.uk/v2/experience/inline/play';
module.exports = function () { 

    this.Given(/^I query RMS API$/, () => {
        return helpers.loadPage(page.pidFinder.url, 1000);
    });

    this.When(/^I extract PID$/, () => {
      //  let elemArray = driver.findElements(page.pidFinder.elements.musicPid);
            let elemArray = driver.findElements(page.pidFinder.elements.musicPid);
            return elemArray.then(function(elems) {
              return Promise.all(
                elems.map(function(elem) {
                  // all promises must be resolved
                  return elem.getText(); // map the elements' text to an array
                })
              )
              .then(function(text) {
                  console.log('The array Length is: ' + text.length)
                  console.log('The array is: ' + text)
                return text; // return the text of the element
              });
            });
    });

    this.Then(/^I can see its available for at least more than twenty days$/, async function () {
        await request(url)
            .get('/m000plcn')
            .expect(200)
            .expect('Content-Type', /json/)
            .then((response) => {
                const availablity = response.body.data[0].data[0].availability;
                const fromDate = availablity.from;
                const toDate = availablity.to;
                var d1 = new Date();
                console.log('date is ' + d1);
                var d2 = new Date(toDate); // some date
                // var diff = Math.abs(d1 - d2);
                var time = Math.floor((d2 - d1) / (24 * 3600 * 1000));
                if (time > 20) {
                    console.log('this pid availability for ' + time + 'days');
                }
                else {
                    console.log('this pid availability for ' + time + 'days');
                }
            });
      });
};