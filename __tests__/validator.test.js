const validator = require('../lib/validator.js');
const {
  CastError,
} = require('../lib/Errors');

describe('validator module', () => {
  
  const str = 'yes';
  const num = 1;
  const arr = ['a'];
  const obj = { x: 'y' };
  const func = () => {};
  const bool = false;

  describe('performs basic validation of', () => {

    it('strings', () => {
      expect(validator.isString(str)).toBeTruthy();
      expect(validator.isString(num)).toBeFalsy();
      expect(validator.isString(arr)).toBeFalsy();
      expect(validator.isString(obj)).toBeFalsy();
      expect(validator.isString(func)).toBeFalsy();
      expect(validator.isString(bool)).toBeFalsy();
    });

    it('numbers', () => {
      expect(validator.isNumber(str)).toBeFalsy();
      expect(validator.isNumber(num)).toBeTruthy();
      expect(validator.isNumber(arr)).toBeFalsy();
      expect(validator.isNumber(obj)).toBeFalsy();
      expect(validator.isNumber(func)).toBeFalsy();
      expect(validator.isNumber(bool)).toBeFalsy();
    });

    it('arrays', () => {
      expect(validator.isAnArray(str)).toBeFalsy();
      expect(validator.isAnArray(num)).toBeFalsy();
      expect(validator.isAnArray(arr)).toBeTruthy();
      expect(validator.isAnArray(obj)).toBeFalsy();
      expect(validator.isAnArray(func)).toBeFalsy();
      expect(validator.isAnArray(bool)).toBeFalsy();
    });

    it('objects', () => {
      expect(validator.isObject(str)).toBeFalsy();
      expect(validator.isObject(num)).toBeFalsy();
      expect(validator.isObject(arr)).toBeFalsy();
      expect(validator.isObject(obj)).toBeTruthy();
      expect(validator.isObject(func)).toBeFalsy();
      expect(validator.isObject(bool)).toBeFalsy();
      
    });

    it('booleans', () => {
      expect(validator.isBoolean(str)).toBeFalsy();
      expect(validator.isBoolean(num)).toBeFalsy();
      expect(validator.isBoolean(arr)).toBeFalsy();
      expect(validator.isBoolean(obj)).toBeFalsy();
      expect(validator.isBoolean(func)).toBeFalsy();
      expect(validator.isBoolean(bool)).toBeTruthy();
    });

    it('functions', () => {
      expect(validator.isFunction(str)).toBeFalsy();
      expect(validator.isFunction(num)).toBeFalsy();
      expect(validator.isFunction(arr)).toBeFalsy();
      expect(validator.isFunction(obj)).toBeFalsy();
      expect(validator.isFunction(func)).toBeTruthy();
      expect(validator.isFunction(bool)).toBeFalsy();
    });
  });

  describe('performs array validation of', () => {

    const arrayOfStrings = ['a', 'b', 'c'];
    const arrayOfNumbers = [1, 2, 3];
    const arrayOfObjects = [{}, {}, {}];
    const arrayOfBooleans = [true, false, true];

    it('strings', () => {
      expect(validator.isArrayOfStrings(arrayOfStrings)).toBeTruthy();
      expect(validator.isArrayOfStrings(arrayOfNumbers)).toBeFalsy();
      expect(validator.isArrayOfStrings(arrayOfObjects)).toBeFalsy();
      expect(validator.isArrayOfStrings(arrayOfBooleans)).toBeFalsy();
    });

    it('numbers', () => {
      expect(validator.isArrayOfNumbers(arrayOfStrings)).toBeFalsy();
      expect(validator.isArrayOfNumbers(arrayOfNumbers)).toBeTruthy();
      expect(validator.isArrayOfNumbers(arrayOfObjects)).toBeFalsy();
      expect(validator.isArrayOfNumbers(arrayOfBooleans)).toBeFalsy();
    });

    it('objects', () => {
      expect(validator.isArrayOfObjects(arrayOfStrings)).toBeFalsy();
      expect(validator.isArrayOfObjects(arrayOfNumbers)).toBeFalsy();
      expect(validator.isArrayOfObjects(arrayOfObjects)).toBeTruthy();
      expect(validator.isArrayOfObjects(arrayOfBooleans)).toBeFalsy();
    });

    it('booleans', () => {
      expect(validator.isArrayOfBooleans(arrayOfStrings)).toBeFalsy();
      expect(validator.isArrayOfBooleans(arrayOfNumbers)).toBeFalsy();
      expect(validator.isArrayOfBooleans(arrayOfObjects)).toBeFalsy();
      expect(validator.isArrayOfBooleans(arrayOfBooleans)).toBeTruthy();
    });
  });

  describe('get validator for', () => {

    it('strings', () => {
      const rules = 'string';
      expect(validator.getValidator(rules)).toBe(validator.isString);
    });
    
    it('numbers', () => {
      const rules = 'number';
      expect(validator.getValidator(rules)).toBe(validator.isNumber);
    });

    it('arrays', () => {
      const rules = 'array';
      expect(validator.getValidator(rules)).toBe(validator.isAnArray);
    });

    it('objects', () => {
      const rules = 'object';
      expect(validator.getValidator(rules)).toBe(validator.isObject);
    });

    it('booleans', () => {
      const rules = 'boolean';
      expect(validator.getValidator(rules)).toBe(validator.isBoolean);
    });

    it('functions', () => {
      const rules = 'function';
      expect(validator.getValidator(rules)).toBe(validator.isFunction);
    });

    it('array of strings', () => {
      const rules = 'array of strings';
      expect(validator.getValidator(rules)).toBe(validator.isArrayOfStrings);
    });

    it('array of numbers', () => {
      const rules = 'array of numbers';
      expect(validator.getValidator(rules)).toBe(validator.isArrayOfNumbers);
    });

    it('array of objects', () => {
      const rules = 'array of objects';
      expect(validator.getValidator(rules)).toBe(validator.isArrayOfObjects);
    });

    it('array of booleans', () => {
      const rules = 'array of booleans';
      expect(validator.getValidator(rules)).toBe(validator.isArrayOfBooleans);
    });
  });

  describe('re casts for', () => {
    it('strings', () => {
      expect(validator.stringCaster(str)).toBe(str);
      expect(validator.stringCaster(num)).toBe(String(num));
      expect(validator.stringCaster(bool)).toBe(String(bool));
      expect(() => {
        validator.stringCaster(arr);
      }).toThrow(CastError);
      expect(() => {
        validator.stringCaster(obj);
      }).toThrow(CastError);
      expect(() => {
        validator.stringCaster(func);
      }).toThrow(CastError);
    });
  });

});