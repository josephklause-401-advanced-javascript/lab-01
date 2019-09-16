
/**
 * Is this a string?
 * @param input
 * @returns {boolean}
 */
const isString = input => {
  return typeof input === 'string';
};

/**
 * Is this an array of strings?
 * @param {array} input 
 * @returns {boolean}
 */
const isArrayOfStrings = (/*input*/) => {

};

/**
 * Based on a set of rules, what is correct validator?
 * TODO: Define the rules ... how do we send them in? How do we identify?
 * @param rules
 * @returns {boolean}
 */
const getValidator = (/*rules*/) => {
  // CHANGE ME
  return isString;
};

module.exports = {
  isString,
  // moar types...

  isArrayOfStrings,
  // moar array types...

  getValidator
};


