var fetch = require('node-fetch');

function fetchWeather(req, res) {
    const latlng = req.params.latlng
    return fetch(`https://api.darksky.net/forecast/${process.env.DARKSKY_KEY}/${latlng}`)
    .then(resp => resp.json())
    .then(data => res.json(data.currently.summary))
    .catch(error => {
        console.log(error)
        return res.json(error)
    })
}

module.exports = {
  index: fetchWeather
};
