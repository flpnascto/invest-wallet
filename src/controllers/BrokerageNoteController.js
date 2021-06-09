const BrokerageNote = require('../services/BrokerageNoteService');

const create = async (req, res, next) => {
  const dataBroker = req.body;

  try {
    const { statusCode, message } = await BrokerageNote.create(dataBroker);
    res.status(statusCode).json({ statusCode, message });
  } catch (error) {
    next(error);
  }
};

const findAll = async (_req, res, next) => {
  try {
    const { statusCode, brokerageList } = await BrokerageNote.findAll();
    res.status(statusCode).json(brokerageList);
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  const { id } = req.params;
  const dataBroker = req.body;
  try {
    const { statusCode, message } = await BrokerageNote.update(id, dataBroker);
    res.status(statusCode).json({ statusCode, message });
  } catch (error) {
    next(error);
  }
};

const remove = async (req, res, next) => {
  const { id } = req.params;
  try {
    const { statusCode, message } = await BrokerageNote.remove(id);
    res.status(statusCode).json({ statusCode, message });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  create,
  findAll,
  update,
  remove,
};
