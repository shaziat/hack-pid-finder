const request = require('supertest');

//const url = 'https://rms.api.bbc.co.uk/v2/experience/inline/play/';
const music_mixes = 'https://rms.api.bbc.co.uk/v2/experience/';
module.exports = function () {

    // this.Given(/^I query RMS API$/, () => helpers.loadPage(page.pidFinder.url, 1000));

    // this.When(/^I extract PID$/, () => {
    //     return helpers.pidList(page.pidFinder.elements.musicPid).then((text) => {
    //         global.text = text;
    //         console.log('The array Length is: ' + text.length);
    //       //  console.log('The array is: ' + text);
    //       }); 
    //     });

    this.Given(/^I query RMS API$/, async function() {
       // helpers.loadPage(page.pidFinder.music_mixes, 1000);
        await request(music_mixes)
        .get('inline/music')
        .timeout(5000)
        .expect('Content-Type', /json/)
        .then((response) => {
            let music_pids = new Array();
            response.body.data[1].data.forEach((data) => {
                music_pids.push(data.id);
                console.log(data.id);
                return (global.music_pids = music_pids);
            })
            //console.log('The Music Pids are: '+music_pids)
        })
        console.log('The Music Pids are: '+music_pids)
    });
   /*
    this.Then(/^I can see its available for at least more than twenty days$/, async function () {
        const arr = ['m000pp2m'];
        await arr.forEach(async(pid) => { 
            console.log('Entered into Availability code. Pid is: ' + pid);
            await request(url)
                .get(pid)
                .timeout(10000)
                .expect('Content-Type', /json/)
                .then((response) => {
                    console.log(response.status);
                    if (response.status === 200) {
                        response.body.data.forEach((data) => {
                            data.data.forEach((innerData) => {
                            // let innerData = data.data
                             console.log('Print inner data' + innerData)  
                             if (innerData) {
                                    const availablity = innerData.availability;
                                    if (availablity) {
                                        const toDateString = availablity.to;
                                        const currentDate = new Date();
                                        const toDate = new Date(toDateString);
                                        var time = Math.floor((toDate - currentDate) / (24 * 3600 * 1000));
                                        if (time > 20) {
                                            console.log(pid + ' pid availability for ' + time + 'days');
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

    this.Then(/^I can see PID has coming Up Next with at least two items$/, async function () {
        const arr2 = ['m000pp2m'];
        arr2.forEach(async(pid) => {
            console.log('Entered into Coming up next step. Pid is: ' + pid)
            await request(url)
                .get(pid)
                .expect('Content-Type', /json/)
                .then((response) => {
                    console.log("response status code " + response.status);
                    if (response.status === 200) {
                        //if(response.body.data[1].data.length > 12)
                        if(innerData = response.body.data[2])
                            if(innerData.title === "Coming Up Next") {
                            const comingUpNext = innerData.total;
                            if (comingUpNext > 1){
                                console.log("\nThis Pid is valid and has " + comingUpNext + " Upcoming Programmes")
                            }
                            else {
                                console.log("\nThis Pid is invalid as it has " + comingUpNext + " Upcoming Programmes")
                            }  
                        }
                    }
                });
        });
    });*/
      
      this.Then(/^I can see PID has atleast thirteen Tracklists with ellipses$/, async function () {
       // const arr1 = ['m000pp2m'];
       // await text.forEach(async(pid) => { 
        await music_pids.forEach(async(pid) => { 
            console.log('Entered into Tracklist step. Pid is: ' + pid)
            await request(url)
                .get(pid)
                .timeout(10000)
                .expect('Content-Type', /json/)
                .then((response) => { 
                    console.log(response.status);
                    if (response.status === 200) { 
                        const tracklist = response.body.data[1].data.length;
                        console.log('Tracklist count: ' + tracklist);
                        if (tracklist >= 13) {
                            console.log(pid + ' Has more than 13 tracks');
                        }
                        else {
                            console.log(pid + ' Has less than 13 tracks');
                        }
                    }
                })



        })
      }); 

};
