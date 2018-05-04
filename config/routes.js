const router = require('express').Router();
const properties = require('../controllers/properties');
const skillsMatrix = require('../controllers/skillsMatrix');
const chatbot = require('../controllers/chatbot');
const google = require('../controllers/google');
const darksky = require('../controllers/darksky');
const topic = require('../controllers/topic');
const notification = require('../controllers/notification');

router.route('/google/:latlng')
  .get(google.index);

router.route('/darksky/:latlng')
  .get(darksky.index);

router.route('/appointments')
  .get(properties.index)
  .post(properties.create);

router.route('/skillsMatrix')
  .get(skillsMatrix.index);

router.route('/appointments/:placeId')
  .get(properties.show)
  .put(properties.update)
  .delete(properties.delete);

router.route('/chatbot')
  .post(chatbot.makeQuery);

router.route('/registertopic')
  .post(topic.register);

router.route('/notification')
  .post(notification.post);


router.all('*', (req, res) => res.notFound());

module.exports = router;
