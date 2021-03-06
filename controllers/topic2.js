// var key = process.env.FIREBASE_SERVER_KEY;
// var key = process.env.FIREBASE_SERVER_SPECS_KEY;
var key = "AAAATlsAkEw:APA91bH52nZOYAjwYa8DRBwuY_qJB8vkeLSmTtojtTsfVV3umPONEurgSg-O-NgjJSUZKUoraFXypNyo5U_9-KnvvATPhjBx9KhejKHMMw64INc36It3vLxrs3Am2CMZKcHs1sTwjvzgdUUm6wvfqYcbmnu_UWrqLg"
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
