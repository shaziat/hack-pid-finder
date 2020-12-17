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

    pidList: function(selector) {
      let elemArray = driver.findElements(selector);
            return elemArray.then(function(elems) {
              return Promise.all(
                elems.map(function(elem) {
                  // all promises must be resolved
                  return elem.getText(); // map the elements' text to an array
                })
              )
              .then(function(text) {
                return text; // return the text of the element
              });
            });
    }
};
