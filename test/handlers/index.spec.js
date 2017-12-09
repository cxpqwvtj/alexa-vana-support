const handlers = require('../../src/handlers')

test('tora', () => {
  handlers.emit = (command, message) => {
    expect(message).toBe('とら')
  }
  handlers.tora()
})
