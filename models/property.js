const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  name: String,
  address: String,
  postcode: String,
  lat: Number,
  lng: Number,
  placeId: String,
  availableDates: Array
});

module.exports = mongoose.model('Property', propertySchema);
