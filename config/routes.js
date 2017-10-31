const router = require('express').Router();
const properties = require('../controllers/properties');
const chatbot = require('../controllers/chatbot');
let bodyParser = require('body-parser');

router.route('/appointments')
  .get(properties.index)
  .post(properties.create);

router.route('/appointments/:placeId')
  .get(properties.show)
  .put(properties.update)
  .delete(properties.delete);

router.route('/chatbot')
  .post(chatbot.makeQuery);


router.all('*', (req, res) => res.notFound());

module.exports = router;
