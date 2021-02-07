const UnauthorizedError = require('./unauthorized-errror')
const ServerError = require('./server-error')
class HtppResponse {
  static badRequest (error) {
    return { statusCode: 400, body: error }
  }

  static serverError () {
    return { statusCode: 500, body: new ServerError() }
  }

  static unauthorizedError () {
    return { statusCode: 401, body: new UnauthorizedError() }
  }

  static ok (data) {
    return { statusCode: 200, body: data }
  }
}

module.exports = HtppResponse
