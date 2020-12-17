const request = require('supertest');

const url = 'https://rms.api.bbc.co.uk/v2/experience/inline/play/';
module.exports = function () {

    this.Given(/^I query RMS API$/, () => helpers.loadPage(page.pidFinder.url, 1000));

    this.When(/^I extract PID$/, () => {
        return helpers.pidList(page.pidFinder.elements.musicPid).then((text) => {
            global.text = text;
            console.log('The array Length is: ' + text.length);
            console.log('The array is: ' + text);
          }); 
        });

   // });

    this.Then(/^I can see its available for at least more than twenty days$/, async function () {
        
        text.forEach(async(pid) => { 
         await request(url)
            .get(pid)
            .expect(200)
            .expect('Content-Type', /json/)
            .then((response) => {

                response.body.data.forEach((data) => {
                    console.log('Data: ' + data);
                   // data.data.forEach((innerData) => {

                        // if (innerData) {
                        //     const availablity = innerData.availability;
                        //     if (availablity) {
                        //         const toDateString = availablity.to;

                        //         const currentDate = new Date();
                        //         const toDate = new Date(toDateString);
                        //         var time = Math.floor((toDate - currentDate) / (24 * 3600 * 1000));

                        //         if (time > 20) {
                        //             console.log('this pid availability for ' + time + ' days');
                        //         }
                        //         else {
                        //             console.log('this pid availability for ' + time + ' days');
                        //         }
                        //     }
                        // }

                    //});
                });

            });
            
         });

     });
};
