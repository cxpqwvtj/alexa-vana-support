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
  'AMAZON.HelpIntent': function () {
    this.emit(':tell', 'おいすー');
  },
  'Datetime': function () {
    this.emit(':tell', 'ヴァナ時刻くらい自分で調べろばかやろー');
  },
  'tora': function () {
    this.emit(':tell', 'とら');
  },
  'Unhandled': function () {
    this.emit(':tell', 'よい旅を');
  }
};
