// var key = process.env.FIREBASE_SERVER_KEY;
var key = process.env.FIREBASE_SERVER_SPECS_KEY;
var fetch = require('node-fetch');

function register(req, res) {
  const token = req.body.token
  const topic = req.body.topic
  console.log('Token: ',token);
  console.log('Topic: ',topic);

  const url = "https://iid.googleapis.com/iid/v1/" + token + "/rel/topics/" + topic;

  fetch(url,
    {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer key=' + key
      }
    })
    .then((resp) => {
      console.log("Resp: ", resp)
      return resp.json()
    })
    .catch(error => {
      console.log('Error: ', error)
      return res.json(error)
    })
}
module.exports = {
  register: register
};
