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

module.exports = {
  create,
};
