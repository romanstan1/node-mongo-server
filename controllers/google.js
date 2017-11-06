var fetch = require('node-fetch');

function fetchDetails(req, res) {
    const latlng = req.params.latlng.split(',')
    const lat = latlng[0]
    const lng = latlng[1]
    console.log("lat lng",lat, lng)

    return fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&rankby=distance&keyword=specsavers+opticians&key=${process.env.REACT_APP_GMAPS_KEY}`)
    .then((resp) => resp.json())
    .then((data) => data.results)
    .then(results => Promise.all(results.map(result => fetchPlaceDetails(result))))
    .then(results => Promise.all(results.map(result => fetchDistanceDetails(lat,lng,result))))
    // .then(newResults => newResults)
    .then((newResults) => res.json(newResults))
    .catch(error => console.log(error))
}

const fetchPlaceDetails = (result) => {
  return fetch(`https://maps.googleapis.com/maps/api/place/details/json?placeid=${result.place_id}&key=${process.env.REACT_APP_GMAPS_KEY}`)
  .then(resp => resp.json())
  .then(data => {
    return {
      ...result,
      name: result.name.slice(0, 20) === 'Specsavers Opticians'?
      result.name.slice(21): result.name.slice(0, 10) === 'Specsavers'?
      result.name.slice(11): result.name,
      phone_number: data.result.formatted_phone_number,
      opening_hours: data.result.opening_hours,
      website: data.result.website,
      fullAddress: data.result.formatted_address
    }
  })
  .catch(error => console.log(error))
}

const fetchDistanceDetails = (lat,lng,result) => {
  return fetch(`https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${lat},${lng}&destinations=place_id:${result.place_id}&key=${process.env.REACT_APP_GMAPS_KEY}`)
  .then(resp => resp.json())
  .then(data => {
    return {
      ...result,
      proximity_to_location: {lat, lng},
      proximity: data.rows[0].elements[0]
    }
  })
  .catch(error => console.log(error))
}

module.exports = {
  index: fetchDetails
};
