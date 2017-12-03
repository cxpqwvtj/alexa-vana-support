var Alexa = require('alexa-sdk');
exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    alexa.execute();
};
 
var handlers = {
    'Unhandled': function () {
        this.emit(':tell', 'Hello Workd');
    }
};
