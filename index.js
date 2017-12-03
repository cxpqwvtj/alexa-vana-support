var Alexa = require('alexa-sdk');
exports.handler = function(event, context, callback) {
  var alexa = Alexa.handler(event, context);
  alexa.appId = process.env.APP_ID;
  alexa.registerHandlers(handlers);
  alexa.execute();
};
 
var handlers = {
  'Unhandled': function () {
    this.emit(':tell', 'よい旅を');
  }
};
