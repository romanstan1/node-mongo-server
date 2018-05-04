var fetch = require('node-fetch');

function post(req, res) {
  const title = req.body.title;
  const body = req.body.body;
  const icon = req.body.icon;

  const content = {
    notification: {
      title, body, icon,
      click_action: "/index.html"
    },
    to : "/topics/ecomm"
  }

  fetch('https://fcm.googleapis.com/fcm/send', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'key=AAAAgDqojms:APA91bEpE1orvJ_OGqmcpfrvMphVeL47KDccfy6n226n2Equ8GIamYQeFDYqEv5gMR8oXAZcQH8CkGlOjTVX9Zyj06MVz5LRM8h2ixO_cv84yhlm4HXA4uQbYyXQ6ik1PI8pVSRotsc8'
    },
    body: JSON.stringify(content)
  })
  .then(resp => {
    return res.json(resp)
  })
  .catch(error => {
    console.log("error",error)
    return res.json(error)
  })
}

module.exports = {
  post: post
};
