const router = require('express').Router();
const BrokerageNote = require('../controllers/BrokerageNoteController');

router.route('/')
  .get()
  .post(BrokerageNote.create)
  .put()
  .delete();

module.exports = router;
