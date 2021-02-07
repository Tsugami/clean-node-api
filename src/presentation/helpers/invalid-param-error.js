class InvalidParamError extends Error {
  constructor (paramName) {
    super(`Missing param: ${paramName}`)
    this.name = 'InvalidParamError'
  }
}

module.exports = InvalidParamError
