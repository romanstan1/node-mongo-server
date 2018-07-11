var key = process.env.FIREBASE_NOTICATION_SERVER_PERFORMANCE_KEY;
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
      return res.json(resp)
    })
    .catch(error => {
      console.log('Error: ', error)
      return res.json(error)
    })
}
module.exports = {
  register: register
};
