const Schema = require('../lib/Schema');

const validModel = {
  'firstName': 'Chris',
  'lastName': 'Sample',
  'hair': {
    'type': 'wavy',
    'color': 'brown'
  },
  'favoriteFoods': [
    'pizza',
    'cupcakes',
    'salmon'
  ],
  'married': true,
  'kids': 3
};

const invalidModel = {
  'firstName': '',
  'lastName': 0,
  'hair': {
    'type': 'wavy',
    'color': 'brown'
  },
  'favoriteFoods': [
    'pizza',
    'cupcakes',
    'salmon'
  ],
  'kids': 3
};

describe('Schema', () => {
  const personSchema = {
    firstName: { type: 'string', required: true },
    lastName: { type: 'string', required: true },
    married: { type: 'boolean', required: true },
    kids: { type: 'number', required: true }
  };

  it('validates a correct model', () => {
    const expected = { 
      firstName: 'Chris', 
      lastName: 'Sample', 
      married: true, 
      kids: 3 
    };

    const schema = new Schema(personSchema);
    expect(schema.validate(validModel)).toEqual(expected);
  });

  it('throws on invalid model', () => {
    const expected = [
      { error: ' is not a string' },
      { error: 'married is required' },
      { error: 'undefined is not a boolean' }
    ];

    const schema = new Schema(personSchema);
    expect(schema.validate(invalidModel)).toEqual(expected);
  });
});