class ServerError extends Error {
  constructor () {
    super('Internal Error')
    this.name = 'Internal Error'
  }
}

module.exports = ServerError
