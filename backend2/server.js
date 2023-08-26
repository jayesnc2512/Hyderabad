
const express = require('express');
const bodyParser = require('body-parser');
const cron = require('node-cron');
const twilio = require('twilio');

const app = express();
const accountSid = 'ACaa6fa672e28b0b1565f4bf561f07109a'; 
const authToken = 'afbe2fecdda2e9735cddcdd769fffaeb';  

const client = new twilio(accountSid, authToken);
const port = 3001; // You can choose any port you prefer
// const client = twilio('ACaa6fa672e28b0b1565f4bf561f07109a', 'afbe2fecdda2e9735cddcdd769fffaeb');
const twilioClient = twilio('ACaa6fa672e28b0b1565f4bf561f07109a', 'afbe2fecdda2e9735cddcdd769fffaeb');
// app.use(bodyParser.json());
// CORS setup (if needed)
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
    // Define a route to handle form submissions
    app.post('/submit', (req, res) => {
      const formData = req.body;
      async function sendScheduledSms() {
        // schedule message to be sent 61 minutes after current time
        const sendWhen = new Date(new Date().getTime() + 70 * 60000);
      
    // const message = `Reminder: It's time to take your ${formData.name} medication.`;
    // await twilioClient.messages.create({
    //   body: formData.message,
    //   from: '+15419068411',
    //   to: formData.phoneNumber,
    // });
        // send the SMS
        const messagingServiceSid = 'MGe9a5c5c6782d8b0c8bbd1a345b898211';
        const message = await client.messages.create({
          from: messagingServiceSid,
          to: formData.phoneNumber,  // ← your phone number here
          body: `Reminder: It's time to take your ${formData.name} medication.`,
          scheduleType: 'fixed',
          sendAt: sendWhen.toISOString(),
        });
        console.log(formData.name);
        console.log(message.sid);
      }
      sendScheduledSms();
      console.log(formData.name);
   //     console.log(message.sid);
      console.log(formData);
      res.json({ message: 'Form data received successfully' });
    });
        
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
    // Parse JSON and form data

    







    


    
    

    


// client.messages.create({
//     body: 'Ahoy Mate!',
//     to: '+919834624338', 
//     from: '+15419068411' 
// })
// .then((message) => console.log(message.sid));

// create a Twilio client


// to send otp
// client.verify.v2.services('VA7d67f1937c389dedbb520d55a725674b')
//                 .verifications
//                 .create({to: '+919834624338', channel: 'sms'})
//                 .then(verification => console.log(verification.status));

// to verify otp
// client.verify.v2.services('VA7d67f1937c389dedbb520d55a725674b')
//       .verificationChecks
//       .create({to: '+919834624338', code: '863917'})
//       .then(verification_check => console.log(verification_check.status));