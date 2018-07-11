var fetch = require('node-fetch');

function post(req, res) {
  const title = req.body.title;
  const body = req.body.body;
  const icon = req.body.icon;
  const key = process.env.FIREBASE_NOTICATION_SERVER_PERFORMANCE_KEY;

  const content = {
    notification: {
      title, body, icon,
      click_action: "/index.html"
    },
    to : "/topics/innovation"
  }

  fetch('https://fcm.googleapis.com/fcm/send', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'key=' + key
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
