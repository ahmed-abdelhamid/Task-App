const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'slevin.glevra@gmail.com',
    subject: 'Thanks for joining in!',
    text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
  });
};

const sendGoodbyeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'slevin.glevra@gmail.com',
    subject: 'GoodBye',
    text: `GoodBye, ${name}. Hope you join us again soon.`
  });
};

module.exports = { sendWelcomeEmail, sendGoodbyeEmail };
