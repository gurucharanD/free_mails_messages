const express = require('express')
const router = express.Router()
const fs = require('fs')

const Nexmo = require('nexmo');
const nodemailer = require('nodemailer');


//log middleware that logs  requests to this router
router.use(function timeLog(req, res, next) {

    fs.appendFile('log.txt', Date() + "\t" + req.url + req.ip + "\n", 'utf-8', (err, data) => {
        if (err) {
            console.log('error');
        }
    });

    next()
})


/*--------------LOGIN--------------------------*/

router.get('/login', (req, res, next) => {
    login.find((err, login) => {
        res.json(login)
    })
})

/*------------------LOGIN END HERE------------------------*/



/*----------------SEND MESSAGE--------------------*/


router.post('/sendmessage', (req, res, next) => {
    
   var nexmo = new Nexmo({
	apiKey: '2f29b42d',
	apiSecret: '2d1353a571493740'
  });

  var from = req.body.sender;
  var to = req.body.receiver;
  var text = req.body.msg;

  nexmo.message.sendSms(from, to, text);
  
})

/*----------------------👻---------------------*/


/*----------------SEND E-MAIL--------------------*/

router.post('/sendemail', (req, res, next) => {
	
	var transporter = nodemailer.createTransport({
		service: 'Gmail',
		auth: {
			user: req.body.email,
			pass: req.body.password
		}
	});

	var mailOptions = {
		from: req.body.email,
		to: req.body.receiver,
		subject: req.body.subject,
		text: req.body.message
	};
	
	transporter.sendMail(mailOptions, function(error, info){
		if (error) {
			console.log(error);
		} else {
			console.log('Email sent: ' + info.response);
			res.json(info.response)
		}
})
})

/*-------------------------------------------*/






module.exports = router