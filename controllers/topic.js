var key = process.env.FIREBASE_SERVER_KEY;
var fetch = require('node-fetch');

function register(req, res) {
  console.log('Token: ',req.body.token);

  const token = req.body.token
  const topic = req.body.topic
  const url = "https://iid.googleapis.com/iid/v1/" + token + "/rel/topics/all";

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
