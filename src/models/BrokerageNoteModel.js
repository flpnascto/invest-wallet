const { ObjectId } = require('mongodb');
const conn = require('../database');

const collectionName = 'notasCorretagem';

const create = (dataBroker) => conn()
  .then((db) => db.collection(collectionName).insertOne({ dataBroker }));

const findAll = () => conn()
  .then((db) => db.collection(collectionName).find().toArray());

const update = (id, dataBroker) => conn()
  .then((db) => db.collection(collectionName).updateOne(
    { _id: ObjectId(id) },
    { $set: { dataBroker } },
  ));

const remove = (id) => conn()
  .then((db) => db.collection(collectionName).deleteOne({ _id: ObjectId(id) }));

module.exports = {
  create,
  findAll,
  update,
  remove,
};
