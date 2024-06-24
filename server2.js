// use with nodemailer 4.7.0
// $ npm i nodemailer@4.7.0
// exec as:
// $ MAIL_USER=yourmail MAIL_PASS=yourpass node nodemailer-example.js

const nodemailer = require('nodemailer');

const user = process.env.MAIL_USER
const pass = process.env.MAIL_PASS

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: { user, pass }
});

transporter.sendMail({
  from: `"My Awesome Project 👻" <${user}>`,
  to: '...',
  subject: 'Awesome Subject', 
  text: 'Awesome Message',
  html: '<b>Awesome Message</b>'
})
  .then(info => console.log(info))
  .catch(error => console.log(error))