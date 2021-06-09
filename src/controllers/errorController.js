const CODE = require('../helper/statusCode');

module.exports = (err, _req, res) => {
  console.error(`Erro: ${err.message}`);

  const statusCode = err.status ? err.status : CODE.INTERNAL_SERVER_ERROR;

  return res.status(statusCode).json({ statusCode, message: err.message });
};
