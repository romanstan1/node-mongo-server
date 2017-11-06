var fetch = require('node-fetch');

function index(req, res) {
    const latlng = req.params.latlng.split(',')
    const lat = latlng[0]
    const lng = latlng[1]
    console.log("lat lng",lat, lng)
    return fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&rankby=distance&keyword=specsavers+opticians&key=${process.env.REACT_APP_GMAPS_KEY}`)
    .then((resp) => {
      return resp.json()
    })
    .then((data) => {
      // console.log("data",data)
      return data.results})
    // .then(results => Promise.all(results.map(result => fetchPlaceDetails(result))))
    // .then(results => Promise.all(results.map(result => fetchDistanceDetails(lat,lng,result))))
    // .then(newResults => newResults)
    .then((newResults) => res.json(newResults))
    .catch(error => console.log(error))

}
module.exports = {
  index: index
};
