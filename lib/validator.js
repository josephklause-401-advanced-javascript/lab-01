const {
  CastError,
} = require('../lib/errors');

/**
 * Is this a string?
 * @param input
 * @returns {boolean}
 */
const isString = input => {
  return typeof input === 'string';
};

/**
 * Is this a number
 * @param input
 * @returns {boolean}
 */
const isNumber = input => {
  return typeof input === 'number';
};

/**
 * Is this a date
 * @param input
 * @returns {boolean}
 */
const isDate = input => {
  return (input.match(/Time\)$/));
};

/**
 * Is this an Array
 * @params input
 * @returns {booleans}
 */
const isAnArray = input => {
  return Array.isArray(input);
};

/**
 * Is this an Object
 * @params input
 * @returns {booleans}
 */
const isObject = input => {
  if(typeof input === 'object' && (!isAnArray(input))) {
    return true;
  } return false;
};

/**
 * Is this a boolean
 * @params input
 * @returns {booleans}
 */
const isBoolean = input => {
  return typeof input === 'boolean';
};

/**
 * Is this a function
 * @params input
 * @returns {booleans}
 */
const isFunction = input => {
  return typeof input === 'function';
};



/**
 * Is this an array of strings?
 * @param {array} input 
 * @returns {boolean}
 */
const isArrayOfStrings = (input) => {
  if(isAnArray(input)){
    for(let i = 0; i < input.length; i++) {
      if(!isString(input[i])){
        return false;
      } return true;
    }
  } return false;
};

/**
 * Is this an array of numbers?
 * @param {array} input 
 * @returns {boolean}
 */
const isArrayOfNumbers = (input) => {
  if(isAnArray(input)){
    for(let i = 0; i < input.length; i++) {
      if(!isNumber(input[i])){
        return false;
      } return true;
    }
  } return false;
};
/**
 * Is this an array of booleans?
 * @param {array} input 
 * @returns {boolean}
 */
const isArrayOfBooleans = (input) => {
  if(isAnArray(input)){
    for(let i = 0; i < input.length; i++) {
      if(!isBoolean(input[i])){
        return false;
      } return true;
    }
  } return false;
};
/**
 * Is this an array of objects?
 * @param {array} input 
 * @returns {boolean}
 */
const isArrayOfObjects = (input) => {
  if(isAnArray(input)){
    for(let i = 0; i < input.length; i++) {
      if(!isObject(input[i])){
        return false;
      } return true;
    }
  } return false;
};


/**
 * Based on a set of rules, what is correct validator?
 * TODO: Define the rules ... how do we send them in? How do we identify?
 * @param rules
 * @returns {boolean}
 */

const getValidator = (rules) => {
  if(rules === 'string'){
    return isString;
  }
  if(rules === 'number'){
    return isNumber;
  }
  if(rules === 'object'){
    return isObject;
  }
  if(rules === 'array'){
    return isAnArray;
  }
  if(rules === 'date'){
    return isDate;
  }
  if(rules === 'boolean'){
    return isBoolean;
  }
  if(rules === 'function'){
    return isFunction;
  }
  if(rules === 'array of strings'){
    return isArrayOfStrings;
  }
  if(rules === 'array of objects'){
    return isArrayOfObjects;
  }
  if(rules === 'array of numbers'){
    return isArrayOfNumbers;
  }
  if(rules === 'array of booleans'){
    return isArrayOfBooleans;
  }
};



/**recast to a string
 * 
 * @param input
 * @returns {string}
 */
const stringCaster = (input) => {
  const type = typeof(input);
  if(type === 'string') {
    return input;
  } else if(type === 'number' || type === 'boolean') {
    const coercedInput = String(input);
    return coercedInput;
  } else if(type === 'object' && String(input).match(/Time\)$/)) {
    const coercedInput = String(input);
    return coercedInput;
  }
  throw new CastError('string', input);
};

/**recast to a number
 * 
 * @param input
 * @returns {number}
 */
const numberCaster = (input) => {
  const type = typeof(input);
  if(type === 'number') {
    return input;
  } else if(input === '') {
    throw new CastError('number', input);
  } else if(type === 'string' || type === 'date') {
    const coercedInput = Number(input);
    if(!isNaN(coercedInput)) {
      return coercedInput;
    } else {
      throw new CastError('number', input);
    }
  }
  throw new CastError('number', input);
};

/**recast to a boolean
 * 
 * @param input
 * @returns {boolean}
 */
const booleanCaster = (input) => {
  const type = typeof(input);
  if(type === 'boolean') {
    return input;
  } else if(input === 'true' || input === 1 || input === '1') {
    return true;
  } else if(input === 'false' || input === 0 || input === '0') {
    return false;
  } 
  throw new CastError('boolean', input);
};

/**recast to a date
 * 
 * @param input
 * @returns {date}
 */
const dateCaster = (input) => {
  const type = typeof(input);
  if(type === 'string' && input.match(/Time\)$/)) {
    return input;
  }
  throw new CastError('date', input);
};

/**
 * Based on what type you provide, return the appropriate caster
 * @param type
 * @returns {caster}
 */

const getCaster = (type) => {
  if(type === 'string'){
    return stringCaster;
  }
  if(type === 'number'){
    return numberCaster;
  }
  if(type === 'boolean'){
    return booleanCaster;
  }
  if(type === 'date'){
    return dateCaster;
  }
};

module.exports = {
  isString,
  isNumber,
  isDate,
  isAnArray,
  isObject,
  isBoolean,
  isFunction,
  isArrayOfStrings,
  isArrayOfNumbers,
  isArrayOfObjects,
  isArrayOfBooleans,
  getValidator,
  stringCaster,
  numberCaster,
  booleanCaster,
  dateCaster,
  getCaster
};