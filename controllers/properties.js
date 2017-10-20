const Property = require('../models/property');

function indexRoute(req, res, next) {
  Property
    .find()
    .exec()
    .then((properties) => res.json(properties))
    .catch(next);
}

function createRoute(req, res, next) {
  Property
    .create(req.body)
    .then((properties) => res.status(201).json(properties))
    .catch(next);
}

function showRoute(req, res, next) {
  Property
    .findById(req.params.id)
    .exec()
    .then((properties) => {
      if(!properties) return res.notFound();
      res.json(properties);
    })
    .catch(next);
}

function updateRoute(req, res, next) {
  Property
    .findById(req.params.id)
    .exec()
    .then((properties) => {
      if(!properties) return res.notFound();
      for(const field in req.body) {
        properties[field] = req.body[field];
      }
      return properties.save();
    })
    .then((properties) => res.json(properties))
    .catch(next);
}

function deleteRoute(req, res, next) {
  Property
    .findById(req.params.id)
    .exec()
    .then((properties) => {
      if(!properties) return res.notFound();
      return properties.remove();
    })
    .then(() => res.status(204).end())
    .catch(next);
}

module.exports = {
  index: indexRoute,
  create: createRoute,
  show: showRoute,
  update: updateRoute,
  delete: deleteRoute
};
