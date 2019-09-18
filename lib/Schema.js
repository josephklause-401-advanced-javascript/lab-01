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

    //error object
    //validated object
    //forEach through the schema, pull out key, type, required
    //foreach through model 
    //when modelKey === schemaKey
    //get correct typeCaster based on schema type
    //try typeCaster
    //if no error
      //pass modelkey:value into return object
    //if error
      //catch error, push to error object
    //if error object legnth > 0\ 
      //return modelError
    //return model

    Object.entries(this.schema).forEach(([key, {type, required}]) => {
      console.log(key);
      console.log(type);
      console.log(required);
    });
  }
}

module.exports = Schema;