const validator = require('./lib/validator.js');
const DocumentCollection = require('./lib/document-collection');


console.log(validator.isString('hello world'));

const documents = new DocumentCollection('destination.txt');

const testObject = {
  test: 42,
  hair: 'purple'
};

documents.save(testObject)
  .then(obj => {
    console.log('save', obj);

    documents.get(obj.id)
      .then(obj => {
        console.log('get', obj);

        documents.getAll()
          .then(obj => {
            console.log('getAll', obj);
          });
      });
  });