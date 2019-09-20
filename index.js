const DocumentCollection = require('./lib/document-collection');


const documents = new DocumentCollection('destination.txt');

//final for lab-02

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


//final of lab-04
const trumpetModel = {
  brand: 'bach',
  bore: 43,
  engraved: true,
};

const personModel = {
  firstName: 'Chris',
  lastName: 'Sample',
  married: true,
  kids: 3
};

const Model = require('./lib/model');
const Database = require('./lib/database');

Database.connect('test-db')
  .then(() => {

    const Schema = require('./data/schema-data');

    const trumpetModelInstance = new Model('trumpet', Schema.TrumpetSchemaConfig.schema);
    trumpetModelInstance.create(trumpetModel)
      .then(result => {
        console.log('trumpet create', result);
        trumpetModelInstance.findById(result.id)
          .then(result => {
            console.log('trumpet findById', result);
            trumpetModelInstance.find()
              .then(result => {
                console.log('trumpet find', result);
              });
          });
      });

    const personModelInstance = new Model('person', Schema.PersonSchemaConfig.schema);
    personModelInstance.create(personModel)
      .then(result => {
        console.log('person create', result);
        personModelInstance.findById(result.id)
          .then(result => {
            console.log('person findById', result);
            personModelInstance.find()
              .then(result => {
                console.log('person find', result);
              });
          });
      });
  })
  .then(() => Database.close());