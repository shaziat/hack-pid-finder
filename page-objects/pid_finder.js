module.exports = { 

    url: 'http://localhost:8080/networks/bbc_6music',
    music_mixes: 'https://rms.api.bbc.co.uk/v2/experience/inline/music',

    elements: {
        musicPid: by.css('.table-inverse tr > :nth-child(1)')
    }

};
