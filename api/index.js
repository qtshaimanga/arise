var express = require('express')
var bodyParser = require('body-parser');
var mqtt = require('mqtt')
// var nodemailer = require('nodemailer');


var client  = mqtt.connect('mqtt://beeenj.fr')
var app = express()

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

client.on('connect', function () {
  console.log("connected and subscribe");
  client.subscribe('arise');
})

client.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString());
  // client.end()
})

app.get('/', function (req, res) {
  res.send('Hello World!');
  console.log('get receive');
  // create reusable transporter object using the default SMTP transport
  // let transporter = nodemailer.createTransport({
  //     host: 'ssl0.ovh.net',
  //     auth: {
  //         user: 'hello@jant.fr',
  //         pass: '***'
  //     }
  // });
  //
  // // setup email data with unicode symbols
  // let mailOptions = {
  //     from: '"Jant 👻" <hello@jant.fr>', // sender address
  //     to: 'benjamin.gammaire@gmail.com', // list of receivers
  //     subject: 'Hello ✔', // Subject line
  //     text: 'Hello world ?', // plain text body
  //     html: '<b>Hello world ?</b>' // html body
  // };
  //
  // // send mail with defined transport object
  // transporter.sendMail(mailOptions, (error, info) => {
  //     if (error) {
  //         return console.log(error);
  //     }
  //     console.log('Message %s sent: %s', info.messageId, info.response);
  // });
})

app.route('/message')
  .post(function (req, res) {
    res.json(req.body);
    client.publish('arise', req.body.message);
    console.log("POST : ", req.body.message);
})

app.listen(3000, function () {
  console.log('Arise API listening on port 3000!');
})
