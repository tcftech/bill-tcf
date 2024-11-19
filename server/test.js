import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'tcftestingtech@gmail.com', // Your email
    pass: 'Tcf@638174', // App password
  },
});

const mailOptions = {
  from: 'tcftestingtech@gmail.com',
  to: 'vigneshphr2002@gmail.com',
  subject: 'Test Email',
  text: 'This is a test email!',
};

transporter.sendMail(mailOptions, (err, info) => {
  if (err) {
    console.error("Error sending email:", err);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
