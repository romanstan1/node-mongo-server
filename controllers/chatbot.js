var apiai = require('apiai');
var app = apiai(process.env.DIALOGFLOW_CLIENT_ID);

function queryRoute(req, res) {
  console.log('req.body', req.body.input);

  var request = app.textRequest(req.body.input, {
      sessionId: 'hereIsAnUniqueId'
  });

  request.on('response', function(response) {
      console.log('reponse',response);
      return res.json(response);
  });

  request.on('error', function(error) {
      console.log(error);
      return res.json(error);
  });

  request.end();
}
module.exports = {
  makeQuery: queryRoute
};
