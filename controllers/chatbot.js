// const request = require('request-promise');

// function makeQueryRoute(req, res, next) {
//   console.log("makeQuery",req.body )
//   return res.json({ req: req.body});
//
//   // return rp({
//   //   method: 'POST',
//   //   url: oauth.github.accessTokenURL,
//   //   qs: {
//   //     client_id: oauth.github.clientId,
//   //     client_secret: oauth.github.clientSecret,
//   //     code: req.query.code
//   //   },
//   //   json: true
//   // })
// }
// function makeQueryRoute(req, res) {
//   const baseUrl = 'http://partners.api.skyscanner.net/apiservices/browsequotes/v1.0/UK/GBP/en-GB/LON/';
//
//   request({
//     method: 'GET',
//     url: `${baseUrl}${req.query.destination}/2017-03-22`,
//     qs: {
//       apiKey: process.env.SKYSCANNER_API_KEY
//     },
//     json: true
//   })
//   .then((response) => {
//     res.status(200).json(response);
//   })
//   .catch((err) => {
//     res.status(500).json(err);
//   });
// }

// router.put('/api/update', update);

function queryRoute(req, res) {
  console.log('response', req.body);
  return res.json({ res: 'hello'});
}
module.exports = {
  makeQuery: queryRoute
};
