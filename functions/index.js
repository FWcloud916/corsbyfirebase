const functions = require('firebase-functions');
const axios = require('axios');

exports.corsAnyWhere = functions.https.onRequest(async (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'GET');
  // res.set('Access-Control-Allow-Headers', 'Content-Type')
  const getData = await axios({
    method: 'get',
    url: req.query.url
  }).then(async (response) => {
    return res.send(response.data);
  }).catch(err => {
    return res.send('error: ' + err);
  })
})
