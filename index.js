var Alexa = require('alexa-sdk');
exports.handler = function(event, context, callback) {
  console.log(event);
  var alexa = Alexa.handler(event, context);
  alexa.appId = process.env.APP_ID;
  alexa.registerHandlers(handlers);
  alexa.execute();
};
 
var handlers = {
  'LaunchRequest': function () {
    this.emit('AMAZON.HelpIntent');
  },
  // スキルの使い方を尋ねるインテント
  'AMAZON.HelpIntent': function () {
    this.emit(':tell', 'おいすー');
  },
  'Unhandled': function () {
    this.emit(':tell', 'よい旅を');
  }
};
