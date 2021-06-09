const BrokerageNote = require('../models/BrokerageNoteModel');
const CODE = require('../helper/statusCode');

const response = (code, message) => ({ statusCode: code, message });

const create = async (dataBroker) => {
  await BrokerageNote.create(dataBroker);
  return response(CODE.OK, 'Nota adicionada com sucesso');
};

const findAll = async () => {
  const brokerageList = await BrokerageNote.findAll();
  return { statusCode: CODE.OK, brokerageList };
};

const update = async (id, dataBroker) => {
  const data = await BrokerageNote.update(id, dataBroker);
  if (data.modifiedCount === 0) return response(CODE.NOTFOUND, 'Nota não encontrada');
  return response(CODE.OK, 'Nota alterada com sucesso');
};

const remove = async (id) => {
  const data = await BrokerageNote.remove(id);
  if (data.deletedCount === 0) return response(CODE.NOTFOUND, 'Nota não encontrada');
  return response(CODE.OK, 'Nota removida com sucesso');
};

module.exports = {
  create,
  findAll,
  update,
  remove,
};
