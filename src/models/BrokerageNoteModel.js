const conn = require('../database');

const collectionName = 'notasCorretagem';

const create = (dataBroker) => conn()
  .then((db) => db.collection(collectionName).insertOne({ dataBroker }));

module.exports = {
  create,
};
