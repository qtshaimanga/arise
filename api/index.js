var express = require('express')
var bodyParser = require('body-parser');
var mqtt = require('mqtt')


var client  = mqtt.connect('mqtt://test.mosquitto.org')
var app = express()

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

client.on('connect', function () {
  client.subscribe('arise')
})

client.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString())
  // client.end()
})

app.get('/', function (req, res) {
  res.send('Hello World!')
  console.log('get receive');
})

app.route('/message')
  .post(function (req, res) {
    res.json(req.body);
    client.publish('arise', req.body.message)
})

app.listen(3000, function () {
  console.log('Arise API listening on port 3000!')
})
