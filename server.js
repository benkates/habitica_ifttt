const request = require('request');

exports.habitica = function habitica(req, res) {
  if (req.body.key === process.env.APP_KEY){
    request({
    headers: {
      'x-api-user': process.env.HABITICA_USER,
      'x-api-key': process.env.HABITICA_API_KEY
    },
    uri: 'https://habitica.com/api/v3/tasks/user',
    body: { text: req.body.title, type: 'todo' },
    json: true,
    method: 'POST'
  });

  res.status(200).send("Success");
  } else {
    res.status(400).send('Bad key!');
  }
};
