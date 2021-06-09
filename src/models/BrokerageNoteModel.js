const conn = require('../database');

const collectionName = 'notasCorretagem';

const create = (dataBroker) => conn()
  .then((db) => db.collection(collectionName).insertOne({ dataBroker }));

const findAll = () => conn()
  .then((db) => db.collection(collectionName).find().toArray());

module.exports = {
  create,
  findAll,
};
