const HtppResponse = require('../helpers/http-response')

class LoginRouter {
  route (httpRequest) {
    if (!httpRequest || !httpRequest.body) {
      return HtppResponse.serverError()
    }

    const { email, password } = httpRequest.body
    if (!email) {
      return HtppResponse.badRequest('email')
    }
    if (!password) {
      return HtppResponse.badRequest('password')
    }
  }
}

module.exports = LoginRouter
