const handlers = require('../../src/handlers')

test('ガダラル', () => {
  handlers.emit = (command, message) => {
    console.log(command, message)
    expect(message).toBeDefined()
  }
  handlers.netaGadalar()
})
