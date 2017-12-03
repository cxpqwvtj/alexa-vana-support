var Alexa = require('alexa-sdk');
var moment = require('moment');
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
    const message = moment().utcOffset("+09:00").format('YYYY年MM月D日 H時m分s秒');
    this.emit(':tell', `地球時間は${message}です`);
  },
  'tora': function () {
    this.emit(':tell', 'とら');
  },
  'Unhandled': function () {
    this.emit(':tell', 'よい旅を');
  }
};
