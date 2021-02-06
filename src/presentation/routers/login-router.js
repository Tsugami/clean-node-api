const HttpResponse = require('../helpers/http-response')

class LoginRouter {
  constructor (authUserCase) {
    this.authUserCase = authUserCase
  }

  route (httpRequest) {
    try {
      const { email, password } = httpRequest.body
      if (!email) {
        return HttpResponse.badRequest('email')
      }
      if (!password) {
        return HttpResponse.badRequest('password')
      }

      const accessToken = this.authUserCase.auth(email, password)
      if (!accessToken) {
        return HttpResponse.unauthorizedError()
      }

      return HttpResponse.ok({ accessToken })
    } catch (error) {
      return HttpResponse.serverError()
    }
  }
}

module.exports = LoginRouter
