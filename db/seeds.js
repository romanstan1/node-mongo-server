const mongoose = require('mongoose');
const { dbURI } = require('../config/environment');

mongoose.Promise = require('bluebird');
mongoose.connect(dbURI);

const Property = require('../models/property');

Property.collection.drop();

Property
  .create([{
    address: 'Windsor Castle',
    postcode: 'SL4 1NJ',
    bedrooms: 69,
    bathrooms: 31,
    askingPrice: 1000000000,
    floorArea: 484000,
    dateAvailable: '2019-08-01',
    image: 'https://d9y2r2msyxru0.cloudfront.net/sites/default/files/styles/top_carousel/public/wc_spring_2015_v4.jpg?itok=gYFMlZs7'
  }, {
    address: 'Hampton Court',
    postcode: 'KT8 9AU',
    bedrooms: 1000,
    bathrooms: 1001,
    askingPrice: 5000000000,
    floorArea: 700000,
    dateAvailable: '2018-07-01',
    image: 'https://hrpprodsa.blob.core.windows.net/hrp-prod-container/10377/hcp-hero-westfront-1024x374_4.jpg'
  }, {
    address: '1 Druid Lane',
    postcode: 'BL9 4FU',
    bedrooms: 1,
    bathrooms: 0,
    askingPrice: 500,
    floorArea: 10,
    dateAvailable: '2017-06-01',
    image: 'https://thumbs.trulia-cdn.com/pictures/thumbs_5/ps.97/5/1/1/a/picture-uh=c01d10fd3d58e78a1f553d7de95f96-ps=511a549224cce83eb3d7d93bf3b02c99-5416-Druid-Ln-Dallas-TX-75209.jpg'
  }])
  .then((properties) => {
    console.log(`${properties.length} properties created`);
  })
  .catch((err) => console.log(err))
  .finally(() => mongoose.connection.close());
