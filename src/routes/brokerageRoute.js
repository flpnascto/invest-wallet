const router = require('express').Router();
const BrokerageNote = require('../controllers/BrokerageNoteController');

router.route('/')
  .get(BrokerageNote.findAll)
  .post(BrokerageNote.create)
  .put()
  .delete();

router.route('/:id')
  .get()
  .post()
  .put(BrokerageNote.update)
  .delete(BrokerageNote.remove);

module.exports = router;
