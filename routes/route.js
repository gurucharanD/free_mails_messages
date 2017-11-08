const express = require('express')
const router = express.Router()
const fs = require('fs')
const mongoose  = require('mongoose');
const User = require('../models/User');

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



/*--------------REGISTER--------------------------*/

router.post('/registerUser',function(req,res){
	console.log("Register a user");
  
	var newUser=new User();
	newUser.username=req.body.username;
	newUser.password=req.body.password;
	
	console.log(newUser)
	
	User.find({username:newUser.username},function(err,users){
		if(users.length){
			console.log("User already exists");
			res.json({"msg":"User already exists","result":0});
		}
		else{
			newUser.save(function(err,insertedUser){
				if(err){
					console.log("error Saving user "+err);
					res.json({msg:"Registration unsuccessful",result:0});
				}
				else{
					console.log("Registration successful");
					res.json({msg:"Registration Successful",result:1})
				}
	
			})
		}

});
})  

/*------------------REGISTER END HERE------------------------*/

/*--------------LOGIN------------*/
router.post('/login',function(req,res){
	
	console.log(req.body.username)
	console.log(req.body.password)
	var response={}
  User.findOne({username:req.body.username,password:req.body.password},function(err,user){
	
		 if(err) 
		 { 
			 console.log(err);
			 return {msg:"error"};
			 
		 }
		 if(!user){
			 console.log("invalid user");
			 res.json({msg:"Invalid User",result:0});
			 
	   }
	   else{
	   console.log("Valid User");
	   res.json({msg:'Login successful',result:1});

	   }
		 
	 });
 });

/*-------------------------------*/



/*----------------SEND MESSAGE--------------------*/


router.post('/sendmessage', (req, res, next) => {
    
   var nexmo = new Nexmo({
	apiKey: '2f29b42d',
	apiSecret: '2d1353a571493740'
  });

  var from = req.body.sender;
  var to = req.body.receiver;
  var text = req.body.msg;

   console.log(to)
   
  var status="message sent"
  nexmo.message.sendSms(from, to, text);
  console.log(status)
  res.json(status)
  
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