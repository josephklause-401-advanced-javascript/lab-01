/* import and use validators */

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
    //forEach through the schema, pull out key, type, required
    //for each through model
    Object.entries(this.schema).forEach(([key, {type, required}]) => {
      console.log(key);
      console.log(type);
      console.log(required);
    });
  }
}

module.exports = Schema;