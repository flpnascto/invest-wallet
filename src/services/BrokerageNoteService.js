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

module.exports = {
  create,
  findAll,
};
