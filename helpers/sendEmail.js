const sgMail = require('@sendgrid/mail');
require('dotenv').config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = (user) => {
  const msg = {
    to: user.email, // Change to your recipient
    from: 'david1korochik@gmail.com', // Change to your verified sender
    subject: `Welcome to Budgety ${user.fullName}! Thank for your support :)`,
    text: 'Now you can manage your incomes and expanses in an easy way!',
    html: '<strong>Hope you will enjoy, David Korochik, Budgety CEO</strong>',
  };

  sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent');
    })
    .catch((error) => {
      console.error(error.response.body.errors);
    });
};

module.exports = sendEmail;
