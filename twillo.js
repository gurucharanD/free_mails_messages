// Twilio Credentials 
var accountSid = 'AC31b8c8890154a2cf826656f3945b035c'; 
var authToken = '03b92cc3634a732eae2a0a2b1eede2c0'; 
 
//require the Twilio module and create a REST client 
var client = require('twilio')(accountSid, authToken); 
 
client.messages.create({ 
    to: "+917036680050", 
    from: "+15125807009", 
    body: "This is the ship that made the Kessel Run in fourteen parsecs?", 
}, function(err, message) { 
     if(err)
		 console.log(err)
	 else
        console.log(message); 
});




/*var accountSid = 'AC31b8c8890154a2cf826656f3945b035c'; // Your Account SID from www.twilio.com/console
var authToken = 'your_auth_token';   // Your Auth Token from www.twilio.com/console

var twilio = require('twilio');
var client = new twilio(accountSid, authToken);

client.messages.create({
    body: 'Hello from Node',
    to: '+12345678901',  // Text this number
    from: '+12345678901' // From a valid Twilio number
})
.then((message) => console.log(message.sid));*/