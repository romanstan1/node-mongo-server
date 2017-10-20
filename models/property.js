const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  address: String,
  postcode: String,
  bedrooms: Number,
  bathrooms: Number,
  askingPrice: Number,
  floorArea: Number,
  dateAvailable: Date,
  image: String
});

module.exports = mongoose.model('Property', propertySchema);
