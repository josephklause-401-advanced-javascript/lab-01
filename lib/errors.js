
class CastError extends Error {
  constructor(expectedType, providedValue) {
    super(`${providedValue} is not a ${expectedType}`);
    this.expectedType = expectedType;
    this.providedValue = providedValue;
  }
}

class ModelError extends Error {
  constructor(errorCollector) {
    const errorMessage = errorCollector.reduce((errorString, err) => {
      errorString += `${err.error}. `;
      return errorString;
    }, '');
    super(`Model has the following errors: ${errorMessage}`);
  }
}

module.exports = {
  CastError,
  ModelError
};