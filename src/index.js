const Alexa = require('alexa-sdk')
const handlers = require('./handlers')

exports.handler = function(event, context, callback) {
  console.log(event)
  const alexa = Alexa.handler(event, context)
  alexa.appId = process.env.APP_ID
  alexa.registerHandlers(handlers)
  alexa.execute()
}
