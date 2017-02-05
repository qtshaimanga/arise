var express = require('express')
var bodyParser = require('body-parser');
var mqtt = require('mqtt')
var nodemailer = require('nodemailer');
var EmailTemplate = require('email-templates').EmailTemplate
var path = require('path')


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
})

app.route('/message')
  .post(function (req, res) {
    res.json(req.body);
    console.log(req.body);
    client.publish('arise', JSON.stringify(req.body));
})

app.route('/send-invite')
  .post(function (req, res) {

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'ssl0.ovh.net',
        auth: {
            user: 'hello@jant.fr',
            pass: '***'
        }
    });

    // let htmlContent = '<b>Follow this link to send messages to your friend !</b></br>';
    // htmlContent += '<a href=\"localhost:8080/send/'+req.body.id +'\">the link</a>';

    var templateDir = path.join(__dirname, 'template')

    var newsletter = new EmailTemplate(templateDir)
    newsletter.render(function (err, result) {
      let mailOptions = {
        from: '"Arise 💌" <hello@jant.fr>', // sender address
        to: req.body.email, // list of receivers
        subject: req.body.name + ', you are invited', // Subject line
        html: result.html // html body
      };

      // send mail with defined transport object
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
      });
    })

    // setup email data with unicode symbols


    res.json(req.body);
})

app.listen(3000, function () {
  console.log('Arise API listening on port 3000!');
})
