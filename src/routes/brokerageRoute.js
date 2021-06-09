const router = require('express').Router();
const BrokerageNote = require('../controllers/BrokerageNoteController');

router.route('/')
  .get(BrokerageNote.findAll)
  .post(BrokerageNote.create)
  .put()
  .delete();

module.exports = router;
