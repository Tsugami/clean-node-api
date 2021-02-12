const { MissingParamError } = require('../../utils/errors')

class AuthUseCase {
  constructor (loadUserByEmailRepository, encrypter, tokenGeneratorSpy) {
    this.loadUserByEmailRepository = loadUserByEmailRepository
    this.encrypter = encrypter
    this.tokenGeneratorSpy = tokenGeneratorSpy
  }

  async auth (email, password) {
    if (!email) throw new MissingParamError('email')
    if (!password) throw new MissingParamError('password')

    const user = await this.loadUserByEmailRepository.load(email)
    if (!user) return null

    const isValid = await this.encrypter.compare(password, user.password)
    if (!isValid) return null

    const accessToken = this.tokenGeneratorSpy.generate(user.id)
    return accessToken
  }
}

module.exports = AuthUseCase
