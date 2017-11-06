const router = require('express').Router();
const properties = require('../controllers/properties');
const chatbot = require('../controllers/chatbot');
const google = require('../controllers/google');

router.route('/google/:latlng')
  .get(google.index);

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
