const config = require('./jest.config')

module.exports = {
  ...config,
  testMatch: ['**/*.test.js']
}
