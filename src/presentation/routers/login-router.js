const HtppResponse = require('../helpers/http-response')

class LoginRouter {
  constructor (authUserCase) {
    this.authUserCase = authUserCase
  }

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

    this.authUserCase.auth(email, password)

    return {
      statusCode: 401
    }
  }
}

module.exports = LoginRouter
