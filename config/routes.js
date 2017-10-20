const router = require('express').Router();
const properties = require('../controllers/properties');

router.route('/appointments')
  .get(properties.index)
  .post(properties.create);

router.route('/appointments/:id')
  .get(properties.show)
  .put(properties.update)
  .delete(properties.delete);

router.all('*', (req, res) => res.notFound());

module.exports = router;
