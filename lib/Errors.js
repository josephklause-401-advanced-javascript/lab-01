
class CastError extends Error {
  constructor(expectedType, providedValue) {
    super(`${providedValue} is not a ${expectedType}`);
    this.expectedType = expectedType;
    this.providedValue = providedValue;
  }
}

class ModelError extends Error {

}

module.exports = {
  CastError,
  ModelError
};