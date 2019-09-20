const validator = require('./validator');
const {
  CastError,
  ModelError
} = require('../lib/errors');

class Schema {
  /**
   * Create a model schema
   * @param {object} schema - the schema to apply to models
   */
  constructor(schema) {
    this.schema = schema;
  }

  /**
   * Run validation on the supplied model 
   * @param {object} model - the model to validate
   * @throws {ModelError} throws if model does not conform to schema
   * @returns {object} - validated data record
   */
  validate(model) {
    let errorCollector = [];
    let validatedObject = {};

    Object.entries(this.schema).forEach(([key, { type, required }]) => {
      const value = model[key];
      if(value === undefined && required === true) {
        errorCollector.push({ error: `${key} is required` });
      } else if(value === '' && required === true) {
        errorCollector.push({ error: `${key} is required` });
      }
      const typeCaster = validator.getCaster(type);
      try {
        const validatedValue = typeCaster(value);
        validatedObject[key] = validatedValue;
      }
      catch(err) {
        if(err instanceof CastError) {
          errorCollector.push({ error: err.message });
        }
      } 
    });
    if(errorCollector.length > 0) {
      const modelError = new ModelError(errorCollector);
      return modelError;
    } return validatedObject;
  }
}

module.exports = Schema;