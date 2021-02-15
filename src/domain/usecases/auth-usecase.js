const { MissingParamError } = require('../../utils/errors')

class AuthUseCase {
  constructor ({
    loadUserByEmailRepository,
    encrypter,
    tokenGenerator,
    updateAccessTokenRepository
  } = {}) {
    this.loadUserByEmailRepository = loadUserByEmailRepository
    this.encrypter = encrypter
    this.tokenGenerator = tokenGenerator
    this.updateAccessTokenRepository = updateAccessTokenRepository
  }

  async auth (email, password) {
    if (!email) throw new MissingParamError('email')
    if (!password) throw new MissingParamError('password')

    const user = await this.loadUserByEmailRepository.load(email)
    const isValid = user && await this.encrypter.compare(password, user.password)

    if (!isValid) return null

    const accessToken = await this.tokenGenerator.generate(user.id)
    await this.updateAccessTokenRepository.update(user.id, accessToken)
    return accessToken
  }
}

module.exports = AuthUseCase
