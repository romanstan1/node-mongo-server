const Property = require('../models/property');
const moment = require('moment');
const _ = require('lodash');
const afterDate = days => moment().add(days, 'days').format('ll')

const availableDates = [
    {
      date: afterDate(1),
      times: ['8.20am','8.50am','9.10am','9.20am','10.05am','10.10am', '11.10am','11.25am', '11.35am','11.45am', '12.40pm', '1.10pm','1.20pm', '1.30pm','1.40pm', '2.50pm', '4.20pm','5.20pm','5.30pm','5.40pm','5.50pm','5.55pm' ]
    },
    {
      date: afterDate(2),
      times: ['8.20am','8.35am','8.40am','8.45am','8.50am','9.10am','9.30am','9.45am','10.15am','10.25am','10.45am','10.55am','11.15am', '12.20pm','12.40pm','1.00pm', '1.10pm', '1.30pm','2.15pm','2.35pm', '2.50pm', '3.50pm','4.20pm','4.40pm','4.50pm','5.15pm' ]
    },
    {
      date: afterDate(3),
      times: ['8.20am','9.20am','9.30am','10.05am','10.20am','10.30am', '11.10am', '12.15pm','12.20pm','12.30pm','12.40pm','12.50pm', '1.10pm', '2.00pm', '2.05pm', '3.15pm','3.45pm','4.05pm','4.20pm','4.35pm','6.15pm']
    },
    {
      date: afterDate(4),
      times: ['8.45am','9.25am','9.45am','9.55am','10.05am','10.20am','10.30am', '11.10am', '12.20pm','1.10pm','1.30pm','1.50pm', '2.10pm', '2.15pm', '2.35pm', '2.45pm','2.50pm', '2.55pm','3.15pm','3.45pm','4.05pm','6.05pm']
    },
    {
      date: afterDate(5),
      times: ['8.55am','9.30am','10.20am','10.55am', '11.12am', '12.20pm', '2.10pm', '2.15pm', '3.15pm','3.45pm','4.05pm','5.35pm']
    },
    {
      date: afterDate(6),
      times: ['8.55am','10.15am','12.05pm','4.20pm','6.35pm']
    },
    {
      date: afterDate(7),
      times: ['8.55am','9.35am','10.30am','10.50am', '11.32am', '12.30pm', '12.40pm', '12.50pm', '1.10pm', '1.20pm', '2.10pm', '2.15pm', '3.15pm','3.45pm','4.25pm','6.10pm','6.15pm']
    },
    {
      date: afterDate(8),
      times: ['8.55am','9.30am','10.05am','10.20am', '11.12am', '12.20pm', '2.10pm', '2.15pm', '3.15pm','3.45pm','4.05pm','5.35pm']
    },
    {
      date: afterDate(9),
      times: ['8.20am','8.35am','8.40am','8.45am','8.50am','9.10am','9.30am','9.45am','10.15am','10.25am','10.45am','10.55am','11.15am', '12.20pm','12.40pm','1.00pm', '1.10pm', '1.30pm','2.15pm','2.35pm', '2.50pm', '3.50pm','4.20pm','4.40pm','4.50pm','5.15pm' ]
    },
    {
      date: afterDate(10),
      times: ['8.20am','8.50am','9.10am','9.20am','10.05am','10.10am', '11.10am','11.25am', '11.35am','11.45am', '12.40pm', '1.10pm','1.20pm', '1.30pm','1.40pm', '2.50pm', '4.20pm','5.20pm','5.30pm','5.40pm','5.50pm','5.55pm' ]
    }
  ]


function indexRoute(req, res, next) {
  // Promise.then(() => res.json(availableDates))
  console.log("reqest recieved")
  Property
    .find()
    .exec()
    .then((properties) => {
      console.log("response here")
      return res.json(properties)
    })
    .catch((next) => res.json(someData))
}

function createRoute(req, res, next) {
  Property
    .create(req.body)
    .then((properties) => res.status(201).json(properties))
    .catch(next);
}


function showRoute(req, res, next) {
  const remove  = _.random(0, 2)
  const remove2 = _.random(0, 12)
  const remove3 = _.random(0, 18)
  const newDates = availableDates.filter((date, i) => i !== remove && i !== remove2 && i !== remove3)
  // Promise.then(() => res.json(availableDates))
  return res.json(newDates)
  // Property
  //   .findOne({placeId:req.params.placeId})
  //   .exec()
  //   .then((properties) => {
  //     if(!properties) return res.notFound();
  //     res.json(properties);
  //   })
  //   .catch(next);
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
