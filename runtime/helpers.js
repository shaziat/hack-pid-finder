module.exports = {

    loadPage: function(url, waitInSeconds) {

        // use either passed in timeout or global default
        var timeout = (waitInSeconds) ? (waitInSeconds * 1000) : DEFAULT_TIMEOUT;

        // load the url and wait for it to complete
        return driver.get(url).then(function() {

            // now wait for the body element to be present
            return driver.wait(until.elementLocated(by.css('body')), timeout);
        });
    },
};
